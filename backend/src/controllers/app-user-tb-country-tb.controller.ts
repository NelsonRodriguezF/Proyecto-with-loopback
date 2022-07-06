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
ContactInfoTb,
CountryTb,
} from '../models';
import {AppUserTbRepository} from '../repositories';

export class AppUserTbCountryTbController {
  constructor(
    @repository(AppUserTbRepository) protected appUserTbRepository: AppUserTbRepository,
  ) { }

  @get('/app-user-tbs/{id}/country-tbs', {
    responses: {
      '200': {
        description: 'Array of AppUserTb has many CountryTb through ContactInfoTb',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(CountryTb)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<CountryTb>,
  ): Promise<CountryTb[]> {
    return this.appUserTbRepository.countryTbs(id).find(filter);
  }

  @post('/app-user-tbs/{id}/country-tbs', {
    responses: {
      '200': {
        description: 'create a CountryTb model instance',
        content: {'application/json': {schema: getModelSchemaRef(CountryTb)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof AppUserTb.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CountryTb, {
            title: 'NewCountryTbInAppUserTb',
            exclude: ['id'],
          }),
        },
      },
    }) countryTb: Omit<CountryTb, 'id'>,
  ): Promise<CountryTb> {
    return this.appUserTbRepository.countryTbs(id).create(countryTb);
  }

  @patch('/app-user-tbs/{id}/country-tbs', {
    responses: {
      '200': {
        description: 'AppUserTb.CountryTb PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(CountryTb, {partial: true}),
        },
      },
    })
    countryTb: Partial<CountryTb>,
    @param.query.object('where', getWhereSchemaFor(CountryTb)) where?: Where<CountryTb>,
  ): Promise<Count> {
    return this.appUserTbRepository.countryTbs(id).patch(countryTb, where);
  }

  @del('/app-user-tbs/{id}/country-tbs', {
    responses: {
      '200': {
        description: 'AppUserTb.CountryTb DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(CountryTb)) where?: Where<CountryTb>,
  ): Promise<Count> {
    return this.appUserTbRepository.countryTbs(id).delete(where);
  }
}
