-- Roadmap voting schema for viewpo.io
-- Stores vote counts and fingerprints for anonymous dedup

CREATE TABLE IF NOT EXISTS votes (
  item_id TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS voter_fingerprints (
  fingerprint TEXT NOT NULL,
  item_id TEXT NOT NULL,
  voted_at INTEGER NOT NULL,
  PRIMARY KEY (fingerprint, item_id)
);
