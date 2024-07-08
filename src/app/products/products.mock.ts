export const productList : Product[] =[
    {id: 1, name: 'disco-externo', price: 1, description: 'Memoria en disco externa 500GB'},
    {id: 2, name: 'teclado', price: 12, description: ' teclado de computadora Logitech '},
    {id: 3, name: 'mouse', price: 10, description: 'Raton o maus e Logitech'},
    {id: 4, name: 'webcam', price: 20, description: 'Camara web conexion USB par< computadora marca logitech'},
    {id: 5, name: 'monitor', price: 100, description: 'Monitor AOC 21 Pulgadas'},
    {id: 6, name: 'impresora ', price: 70, description: ' impresora HP 4200'},
    {id: 7, name: 'Memoria-USB', price: 25, description: 'memoria usb de 64GB'},
    {id: 8, name: 'cable HDMI', price: 10, description: ' Cable conexion al monitor HDMI'}
]
export  interface Product{
     id:number; 
     name: string;
     price: number;
     description: string;
}