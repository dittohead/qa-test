import WebSocket from 'ws';

export class WebsocketClient{
  private socket;
  constructor(baseUrl:string) {
    this.socket = new WebSocket(baseUrl);
  }

  // @ts-ignore: :(
  async sendData(payload) {
    let message: WebSocket.Data;

    this.socket.addEventListener('open', () => {
      cy.log('Connect to WS');
      cy.debug().log('Payload:', payload)
      this.socket.send(payload);
      this.socket.close(1000, "done");
    })

    this.socket.addEventListener('message', (event: WebSocket.MessageEvent) => {
      message = event.data;
      cy.debug().log('Received message:', message);
    });

    this.socket.addEventListener('error', (error: WebSocket.ErrorEvent) => {
      cy.log('Websocket error:', error);
    });

    return message
  }
}
