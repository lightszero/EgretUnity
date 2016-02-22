class egretUnity
{
    static ver: string = "v0.03";
    public static InitDebuger(): void
    {
        var websock: WebSocket = new WebSocket("ws://localhost:8809/Debug");
        websock.onopen = () =>
        {
            websock.send("test init");
        };
        websock.onclose = () =>
        {
        };
        websock.onerror = () =>
        {
        };
        websock.onmessage = (ev: MessageEvent) =>
        {
            console.log("debug recv:" + ev.data);
        };
    }
}