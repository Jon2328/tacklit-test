import Koa from 'koa'
import Router from '@koa/router'
import koaBody from 'koa-body'
import db from './db/db'
import cors from '@koa/cors'
import 'dotenv/config'
const app = new Koa();
const router = new Router();

app.use(koaBody())
app.use(cors())

// Get all saved feedback score
router.get('/feedback/score', async (ctx, next) => {
  const scores = await db.query(`select score from feedback_score where is_deleted = 0`)
  if (scores.rowCount < 1) {
    ctx.body = []
  } else {
    const scoreResult = scores.rows.map(row => row.score)
    ctx.body = scoreResult
  }
  next()
})


// Save feedback score
router.post('/feedback/score', async (ctx, next) => {
  const payload = ctx.request.body

  if (!payload || typeof payload.score !== 'number') {
    ctx.throw(400, 'Invalid Payload')
  }

  if (payload.score < 0 || payload.score > 11) {
    ctx.throw(400, 'Invalid score range')
  }

  await db.query('insert into feedback_score (score) VALUES ($1)', [payload.score])
  ctx.body = 'Feedback received'
})

app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000);