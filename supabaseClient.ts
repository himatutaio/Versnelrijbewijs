
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://blwlepozqspntqgazbzw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsd2xlcG96cXNwbnRxZ2F6Ynp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjcxNzMwNDAsImV4cCI6MjA4Mjc0OTA0MH0.VLKrY75qA-7JXiGQw04m7cDOy_Tk05ZKY90tvyuvUAw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
