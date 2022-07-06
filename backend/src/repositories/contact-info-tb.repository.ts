import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {ContactInfoTb, ContactInfoTbRelations} from '../models';

export class ContactInfoTbRepository extends DefaultCrudRepository<
  ContactInfoTb,
  typeof ContactInfoTb.prototype.id,
  ContactInfoTbRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(ContactInfoTb, dataSource);
  }
}
