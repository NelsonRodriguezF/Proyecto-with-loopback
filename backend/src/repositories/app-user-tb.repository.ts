import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyThroughRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {AppUserTb, AppUserTbRelations, TypeDocumentTb, UserDocumentTb, CountryTb, ContactInfoTb} from '../models';
import {UserDocumentTbRepository} from './user-document-tb.repository';
import {TypeDocumentTbRepository} from './type-document-tb.repository';
import {ContactInfoTbRepository} from './contact-info-tb.repository';
import {CountryTbRepository} from './country-tb.repository';

export class AppUserTbRepository extends DefaultCrudRepository<
  AppUserTb,
  typeof AppUserTb.prototype.id,
  AppUserTbRelations
> {

  public readonly typeDocumentTbs: HasManyThroughRepositoryFactory<TypeDocumentTb, typeof TypeDocumentTb.prototype.id,
          UserDocumentTb,
          typeof AppUserTb.prototype.id
        >;

  public readonly countryTbs: HasManyThroughRepositoryFactory<CountryTb, typeof CountryTb.prototype.id,
          ContactInfoTb,
          typeof AppUserTb.prototype.id
        >;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('UserDocumentTbRepository') protected userDocumentTbRepositoryGetter: Getter<UserDocumentTbRepository>, @repository.getter('TypeDocumentTbRepository') protected typeDocumentTbRepositoryGetter: Getter<TypeDocumentTbRepository>, @repository.getter('ContactInfoTbRepository') protected contactInfoTbRepositoryGetter: Getter<ContactInfoTbRepository>, @repository.getter('CountryTbRepository') protected countryTbRepositoryGetter: Getter<CountryTbRepository>,
  ) {
    super(AppUserTb, dataSource);
    this.countryTbs = this.createHasManyThroughRepositoryFactoryFor('countryTbs', countryTbRepositoryGetter, contactInfoTbRepositoryGetter,);
    this.registerInclusionResolver('countryTbs', this.countryTbs.inclusionResolver);
    this.typeDocumentTbs = this.createHasManyThroughRepositoryFactoryFor('typeDocumentTbs', typeDocumentTbRepositoryGetter, userDocumentTbRepositoryGetter,);
    this.registerInclusionResolver('typeDocumentTbs', this.typeDocumentTbs.inclusionResolver);
  }
}
