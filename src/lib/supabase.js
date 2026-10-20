// /src/lib/supabase.js
// Supabase client and quote submission services

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://fuamffkvifnqisqlhdau.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ1YW1mZmt2aWZucWlzcWxoZGF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI0NzAxMDMsImV4cCI6MjEwODA0NjEwM30.2zLujKc7JoEztFEI6oLstWLmsN40XJmhQV20yPwlqeA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  }
});

/**
 * Submit a project quote request to Supabase backend
 * @param {Object} payload Form fields
 * @param {File|null} file Optional attached CAD or spec file
 * @returns {Promise<{success: boolean, data: any}>}
 */
export async function submitQuoteRequest(payload, file = null) {
  let fileUrl = null;
  let fileName = null;
  let fileSize = null;

  // Handle optional file attachment upload
  if (file) {
    try {
      fileName = file.name;
      fileSize = file.size;
      const cleanFileName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
      const filePath = `quotes/${Date.now()}_${cleanFileName}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('quote-attachments')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        console.warn('Attachment upload failed, proceeding with quote data:', uploadError);
      } else if (uploadData) {
        const { data: publicUrlData } = supabase.storage
          .from('quote-attachments')
          .getPublicUrl(uploadData.path);
        
        fileUrl = publicUrlData?.publicUrl || null;
      }
    } catch (uploadEx) {
      console.warn('Storage upload exception:', uploadEx);
    }
  }

  // Insert into public.quote_requests
  const record = {
    name: payload.name?.trim() || '',
    company: payload.company?.trim() || '',
    email: payload.email?.trim() || '',
    country: payload.country?.trim() || '',
    service: payload.service || 'Mechanical CAD Drafting',
    engagement_model: payload.engagementModel || payload.engagement_model || 'Project-Based',
    timeline: payload.timeline || 'Within 2 weeks',
    details: payload.details?.trim() || '',
    nda_requested: payload.ndaRequested !== undefined ? payload.ndaRequested : true,
    file_name: fileName,
    file_size: fileSize,
    file_url: fileUrl,
    status: 'new'
  };

  const { data, error } = await supabase
    .from('quote_requests')
    .insert([record]);

  if (error) {
    console.error('Supabase quote request insert error:', error);
    throw error;
  }

  return { success: true, data };
}
