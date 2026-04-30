const Redis = require("ioredis");

// Membuat koneksi Redis menggunakan URL dari environment variable
// Ini akan terhubung ke Upstash di cloud, atau ke localhost jika REDIS_URL tidak di-set
const redis = new Redis(process.env.REDIS_URL || "redis://127.0.0.1:6379");

redis.on('connect', () => {
  console.log('Connected to Redis');
});

redis.on('error', (err) => {
  console.error('Redis connection error:', err);
});

module.exports = redis;