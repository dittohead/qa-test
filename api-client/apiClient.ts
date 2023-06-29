import axios, { AxiosInstance } from 'axios'
import {
  APIUser,
  Calendar,
  CreateCalendar,
  CreateInstrument,
  CreateMp,
  Instrument,
  Mp,
  MpApiKey,
  MpApiKeyCreate,
  Token
} from '../data';

export class ApiClient{

  private baseUrl: string;
  private bearerToken: string
  private user: APIUser;
  private axiosInstance: AxiosInstance;

  constructor(userData: APIUser, url: string) {
    this.user = userData;
    this.baseUrl = url;

    this.axiosInstance = axios.create({
      baseURL: this.baseUrl,
      timeout: 1000,
      headers: { 'Content-Type': 'application/json' }
    })
  }

  async setToken(): Promise<Token>{
    let resp;

    await this.axiosInstance.post('/auth/token', this.user)
      .then(function (response){
        cy.debug().log(response.data);
        resp = response.data;

      })
      .catch(function (error) {
        cy.log(error);
      })

    // @ts-ignore: f null -> test will fail before this place
    this.bearerToken = resp.token;

    return resp
  }

  async createCalendar(payload: CreateCalendar): Promise<Calendar>{
    const config = {
      headers: { 'Authorization': 'Bearer '+this.bearerToken }
    }
    let resp;

    await this.axiosInstance.post('/v2/calendars', payload, config)
      .then(function (response){
        cy.log(response.data);
        resp = response.data;

      })
      .catch(function (error) {
        cy.log(error);
      })

    return resp
  }

  async createInstrument(payload: CreateInstrument): Promise<Instrument>{
    const config = {
      headers: { 'Authorization': 'Bearer '+this.bearerToken }
    }
    let resp;

    await this.axiosInstance.post('/v2/instrument', payload, config)
      .then(function (response){
        cy.log(response.data);
        resp = response.data;

      })
      .catch(function (error) {
        cy.log(error);
      })

    return resp
  }

  async createMp(payload: CreateMp): Promise<Mp>{
    const config = {
      headers: { 'Authorization': 'Bearer '+this.bearerToken }
    }
    let resp;

    await this.axiosInstance.post('/mps', payload, config)
      .then(function (response){
        cy.log(response.data);
        resp = response.data;

      })
      .catch(function (error) {
        cy.log(error);
      })

    return resp
  }

  async createMpApiKey(payload: MpApiKeyCreate, id:string): Promise<MpApiKey>{
    const config = {
      headers: { 'Authorization': 'Bearer '+this.bearerToken }
    }
    let resp;

    await this.axiosInstance.post(`/mps/${id}/api-keys`, payload, config)
      .then(function (response){
        cy.log(response.data);
        resp = response.data;

      })
      .catch(function (error) {
        cy.log(error);
      })

    return resp
  }

}
