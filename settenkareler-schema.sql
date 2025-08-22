-- SettenKareler Images Table
CREATE TABLE settenkareler_images (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url VARCHAR(500) NOT NULL,
  order_index INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Index for better performance
CREATE INDEX idx_settenkareler_images_active ON settenkareler_images(is_active);
CREATE INDEX idx_settenkareler_images_order ON settenkareler_images(order_index);

-- Enable Row Level Security (RLS)
ALTER TABLE settenkareler_images ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users (admin access)
CREATE POLICY "Enable all access for authenticated users" ON settenkareler_images
  FOR ALL USING (auth.role() = 'authenticated');

-- Create policy for public read access (for the website)
CREATE POLICY "Enable read access for all users" ON settenkareler_images
  FOR SELECT USING (is_active = true); 