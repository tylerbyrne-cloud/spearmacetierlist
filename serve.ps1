$prefix = 'http://localhost:8000/'
$root = 'C:\Users\tyler\spear-mace'
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add($prefix)
$listener.Start()
Write-Output "Server started at $prefix"
while ($listener.IsListening) {
    try { $context = $listener.GetContext() } catch { break }
    $request = $context.Request
    $path = $request.Url.AbsolutePath.TrimStart('/')
    if (-not $path) { $path = 'index.html' }
    $file = Join-Path $root $path
    if ([IO.Directory]::Exists($file)) { $file = Join-Path $file 'index.html' }
    if (-not [IO.File]::Exists($file)) {
        $context.Response.StatusCode = 404
        $context.Response.Close()
        continue
    }
    $ext = [IO.Path]::GetExtension($file).ToLowerInvariant()
    switch ($ext) {
        '.css'  { $context.Response.ContentType = 'text/css' }
        '.js'   { $context.Response.ContentType = 'application/javascript' }
        '.html' { $context.Response.ContentType = 'text/html' }
        '.png'  { $context.Response.ContentType = 'image/png' }
        '.jpg'  { $context.Response.ContentType = 'image/jpeg' }
        '.jpeg' { $context.Response.ContentType = 'image/jpeg' }
        default { $context.Response.ContentType = 'application/octet-stream' }
    }
    $bytes = [IO.File]::ReadAllBytes($file)
    $context.Response.ContentLength64 = $bytes.Length
    $context.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    $context.Response.OutputStream.Close()
}
$listener.Stop()
