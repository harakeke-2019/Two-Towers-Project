exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {id: 99901, name: 'Uncle Bully', star_sign: 'Aquarius', gang: 'gAnGsTeRs 4 JeSuS', chapter: 'The rainbow chapter'},
        {id: 99902, name: 'Fullabei Jones', star_sign: 'Virgo', gang: 'Crazy Horses', chapter: 'Mahia'}
      ])
    })
}
