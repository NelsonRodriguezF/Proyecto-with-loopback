import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_user_contact_id_user: {
        name: 'fk_user_document_id_user',
        entity: 'appusertb',
        entitykey: 'id',
        foreignkey: 'UserID'
      },
      fk_user_contact_id_country: {
        name: 'fk_user_document_id_country',
        entity: 'countrytb',
        entitykey: 'id',
        foreignkey: 'CountryID'
      }
    }
  }
})
export class ContactInfoTb extends Entity {
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
  Adress: string;

  @property({
    type: 'string',
    required: true,
  })
  City: string;

  @property({
    type: 'string',
    required: true,
  })
  Phone: string;

  @property({
    type: 'string',
    required: true,
  })
  CelPhone: string;

  @property({
    type: 'string',
    required: true,
  })
  EmergencyName: string;

  @property({
    type: 'string',
    required: true,
  })
  EmergencyPhone: string;

  @property({
    type: 'number',
  })
  UserID?: number;

  @property({
    type: 'number',
  })
  CountryID?: number;

  constructor(data?: Partial<ContactInfoTb>) {
    super(data);
  }
}

export interface ContactInfoTbRelations {
  // describe navigational properties here
}

export type ContactInfoTbWithRelations = ContactInfoTb & ContactInfoTbRelations;
