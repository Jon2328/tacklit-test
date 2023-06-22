import db from '../db'

(async () => {
  console.log('Migration running...')
  await db.query(`
    CREATE TABLE IF NOT EXISTS feedback_score (
      user_id serial PRIMARY KEY,
	    score INT NOT NULL,
      is_deleted INT NOT NULL DEFAULT 0,
      created_at timestamp  DEFAULT NOW()
    );
  `)
  console.log('Migration Finish')
  process.exit()
})()