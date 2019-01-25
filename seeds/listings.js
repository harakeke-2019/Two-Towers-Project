exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        {id: 1, user_id: 99901, title: 'gAnGsTeRs 4 sElF lOve', description: 'nEeD New ProSPeCtS. we aRe aN inCLusive GaNg so ALl sHaPes aNd sIzEs arE wElCoMe. yOu aRe bEaUtiFul JuSt tHe wAy yOu aRe. If u WaNnA jOin the KuZzIhOod we wOuld loVe 2 pAtCh U uP kUz. BuT NeVer F0RgEt... tHe ReaL patCh iS InSiDe AlL oF uS'},
        {id: 2, user_id: 99902, title: 'New prospects wanted', description: 'kia ora kuzzies. this is ur kuzzy fullabei. looing for a new kuzzy to join the gang. must have a good set of priors and at least 2 and a half tattoos. we meet every wednesday night at 7.30 for choir practice and charades so please have that night free too.'},
        {id: 3, user_id: 99903, title: 'Join us: BYO sawn off shotgun', description: 'one of our broz got locked up last week so now we need a new guitarist for our alternative folk band, the lamenting daffodils..but its a members only band so i guess we now looking for another member. we a bit low on budget so cant afford to get u a real leather patch but we run community needlepoint workshops every other week so u can make ur own. we all drink kombucha from a brown paper bag so people think its straight top shelf- but gut health is important. if you want to look more staunch ur welcom to provide ur own accessories like sawn off rifles and pitbulls on leather studded chains- let our accountant know as these are tax rebateable'}
      ])
    })
}
