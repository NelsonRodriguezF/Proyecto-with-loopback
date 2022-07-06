import {Entity, model, property, hasMany} from '@loopback/repository';
import {TypeDocumentTb} from './type-document-tb.model';
import {UserDocumentTb} from './user-document-tb.model';
import {CountryTb} from './country-tb.model';
import {ContactInfoTb} from './contact-info-tb.model';

@model()
export class AppUserTb extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  LastName: string;

  @property({
    type: 'string',
    required: true,
  })
  Name: string;

  @property({
    type: 'boolean',
    required: true,
  })
  IsMilitar: boolean;

  @property({
    type: 'date',
    required: true,
  })
  TimeCreate: string;

  @property({
    type: 'boolean',
    required: true,
  })
  IsTemporal: boolean;

  @property({
    type: 'string',
    required: true,
  })
  username: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @hasMany(() => TypeDocumentTb, {through: {model: () => UserDocumentTb, keyFrom: 'UserID', keyTo: 'TypeDocumentID'}})
  typeDocumentTbs: TypeDocumentTb[];

  @hasMany(() => CountryTb, {through: {model: () => ContactInfoTb, keyFrom: 'UserID', keyTo: 'CountryID'}})
  countryTbs: CountryTb[];

  constructor(data?: Partial<AppUserTb>) {
    super(data);
  }
}

export interface AppUserTbRelations {
  // describe navigational properties here
}

export type AppUserTbWithRelations = AppUserTb & AppUserTbRelations;
