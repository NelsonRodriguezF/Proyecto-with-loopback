import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_user_document_id_user: {
        name: 'fk_user_document_id_user',
        entity: 'appusertb',
        entitykey: 'id',
        foreignkey: 'UserID'
      },
      fk_user_document_id_type: {
        name: 'fk_user_document_id_type',
        entity: 'typedocumenttb',
        entitykey: 'id',
        foreignkey: 'TypeDocumentID'
      }
    }
  }
})
export class UserDocumentTb extends Entity {
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
  Document: string;

  @property({
    type: 'string',
    required: true,
  })
  PlaceExpedition: string;

  @property({
    type: 'date',
    required: true,
  })
  DateExpedition: string;

  @property({
    type: 'number',
  })
  UserID?: number;

  @property({
    type: 'number',
  })
  TypeDocumentID?: number;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserDocumentTb>) {
    super(data);
  }
}

export interface UserDocumentTbRelations {
  // describe navigational properties here
}

export type UserDocumentTbWithRelations = UserDocumentTb & UserDocumentTbRelations;
