import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Services extends BaseSchema {
  protected tableName = 'services'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').nullable()
      table.string('service_name').nullable()
      table.timestamps(true, true)
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
