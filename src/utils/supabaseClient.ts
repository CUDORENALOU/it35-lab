import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ddfgaftovuziksrbmfdm.supabase.co/';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkZmdhZnRvdnV6aWtzcmJtZmRtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMjkxMTIsImV4cCI6MjA1OTkwNTExMn0.MxZJm_zijdn4NAZrN22vNvbik6Hu56WO8sPE2R7UbhU';

export const supabase = createClient(supabaseUrl, supabaseKey);