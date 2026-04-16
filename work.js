export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    
    // CORS 设置，允许你的网站访问
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    // 获取计数
    if (url.pathname === '/count') {
      const count = await env.AVATAR_COUNTER.get('downloads') || '0';
      return new Response(JSON.stringify({ count: parseInt(count) }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // 增加计数
    if (url.pathname === '/increment') {
      const current = await env.AVATAR_COUNTER.get('downloads') || '0';
      const newCount = parseInt(current) + 1;
      await env.AVATAR_COUNTER.put('downloads', newCount.toString());
      
      return new Response(JSON.stringify({ count: newCount, success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    return new Response('Not Found', { status: 404, headers: corsHeaders });
  },