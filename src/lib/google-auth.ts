// Google OAuth 配置
export const GOOGLE_CONFIG = {
  clientId: '837367551114-old3ir22j8ajdn9ej2jsphsm7ndfaqqr.apps.googleusercontent.com',
  scope: 'openid email profile',
  responseType: 'code'
}

// 生成随机字符串用于state参数
export function generateRandomString(): string {
  const array = new Uint32Array(28)
  if (typeof window !== 'undefined' && window.crypto) {
    window.crypto.getRandomValues(array)
    return Array.from(array, dec => ('0' + dec.toString(16)).substr(-2)).join('')
  }
  // 服务端fallback
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

// 构建Google OAuth URL
export function buildGoogleAuthUrl(redirectUri: string): string {
  const state = generateRandomString()
  
  // 保存state用于验证（仅在浏览器环境）
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('oauth_state', state)
  }
  
  const params = new URLSearchParams({
    client_id: GOOGLE_CONFIG.clientId,
    redirect_uri: redirectUri,
    scope: GOOGLE_CONFIG.scope,
    response_type: GOOGLE_CONFIG.responseType,
    state: state
  })
  
  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`
}

// 验证OAuth回调参数
export function validateOAuthCallback(code: string, state: string): boolean {
  if (typeof window === 'undefined') return false
  
  const savedState = sessionStorage.getItem('oauth_state')
  if (state !== savedState) {
    console.error('OAuth state验证失败')
    return false
  }
  
  // 清除保存的state
  sessionStorage.removeItem('oauth_state')
  return true
}

// 清理URL参数
export function cleanupUrlParams(): void {
  if (typeof window !== 'undefined') {
    window.history.replaceState({}, document.title, window.location.pathname)
  }
} 