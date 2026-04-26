/*
  # Initial Schema Setup
  
  1. New Tables
    - `startups`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `author_id` (uuid, references auth.users)
      - `votes` (int, default 0)
      - `created_at` (timestamptz)
    - `comments`
      - `id` (uuid, primary key)
      - `startup_id` (uuid, references startups)
      - `user_id` (uuid, references auth.users)
      - `content` (text)
      - `created_at` (timestamptz)
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

CREATE TABLE IF NOT EXISTS startups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  author_id uuid REFERENCES auth.users(id),
  votes int DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  startup_id uuid REFERENCES startups(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id),
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE startups ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read startups" ON startups FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert startups" ON startups FOR INSERT TO authenticated WITH CHECK (true);

CREATE POLICY "Public can read comments" ON comments FOR SELECT USING (true);
CREATE POLICY "Authenticated users can insert comments" ON comments FOR INSERT TO authenticated WITH CHECK (true);
