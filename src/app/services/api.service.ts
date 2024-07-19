import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = 'https://fakestoreapi.com/products'
  
//consume front end para par ake funcione. 

  constructor(private _httpClient: HttpClient) {}
  
    public getAllProducts(): Observable<IProduct[]>{   //Devuelve una obsservables de tipo IProduct
      // se puede agregar un poco de logica para saber que se puede cambiar las cosas
      // const params = sort ? `?sort=${sort}` : '';    Cambias la variable en el return por param, ?sort=${sort}
      // 401 usted no tiene permisos.

      return this._httpClient.get<IProduct[]>(`${this.baseURL}`);
    } 
    public getProduct(id: number): Observable<IProduct>{
      return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
    }

    public getProductById(id: number): Observable<IProduct>{ //Devuelve observables de un Producto
      return this._httpClient.get<IProduct>(`${this.baseURL}/${id}`);
    } 
    
    public getAllCategories(): Observable<Category[]>{ // devuelve observables de categorias.
      return this._httpClient.get<Category[]>(`${this.baseURL}/categories`);
    }
    public newProduct(product: IProduct): Observable<IProduct>{ // devuelve observables de un producto.
      return this._httpClient.post<IProduct>(`${this.baseURL}`, product);
    }
    public updateProduct(id: number, product:IProduct): Observable<IProduct>{
      return this._httpClient.put<IProduct>(`${this.baseURL}/${product.id}`, product);
    }
    public deleteProduct(id:number): Observable<IProduct>{
      return this._httpClient.delete<IProduct>(`${this.baseURL}/${id}`);
    }   
  }

