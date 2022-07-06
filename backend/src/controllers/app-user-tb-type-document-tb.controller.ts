import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
  import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
AppUserTb,
UserDocumentTb,
TypeDocumentTb,
} from '../models';
import {AppUserTbRepository} from '../repositories';

export class AppUserTbTypeDocumentTbController {
  constructor(
    @repository(AppUserTbRepository) protected appUserTbRepository: AppUserTbRepository,
  ) { }

  @get('/app-user-tbs/{id}/type-document-tbs', {
    responses: {
      '200': {
        description: 'Array of AppUserTb has many TypeDocumentTb through UserDocumentTb',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(TypeDocumentTb)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<TypeDocumentTb>,
  ): Promise<TypeDocumentTb[]> {
    return this.appUserTbRepository.typeDocumentTbs(id).find(filter);
  }

  @post('/app-user-tbs/{id}/type-document-tbs', {
    responses: {
      '200': {
        description: 'create a TypeDocumentTb model instance',
        content: {'application/json': {schema: getModelSchemaRef(TypeDocumentTb)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof AppUserTb.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TypeDocumentTb, {
            title: 'NewTypeDocumentTbInAppUserTb',
            exclude: ['id'],
          }),
        },
      },
    }) typeDocumentTb: Omit<TypeDocumentTb, 'id'>,
  ): Promise<TypeDocumentTb> {
    return this.appUserTbRepository.typeDocumentTbs(id).create(typeDocumentTb);
  }

  @patch('/app-user-tbs/{id}/type-document-tbs', {
    responses: {
      '200': {
        description: 'AppUserTb.TypeDocumentTb PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TypeDocumentTb, {partial: true}),
        },
      },
    })
    typeDocumentTb: Partial<TypeDocumentTb>,
    @param.query.object('where', getWhereSchemaFor(TypeDocumentTb)) where?: Where<TypeDocumentTb>,
  ): Promise<Count> {
    return this.appUserTbRepository.typeDocumentTbs(id).patch(typeDocumentTb, where);
  }

  @del('/app-user-tbs/{id}/type-document-tbs', {
    responses: {
      '200': {
        description: 'AppUserTb.TypeDocumentTb DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(TypeDocumentTb)) where?: Where<TypeDocumentTb>,
  ): Promise<Count> {
    return this.appUserTbRepository.typeDocumentTbs(id).delete(where);
  }
}
