exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('listings').del()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        {id: 1, user_id: 99901, title: 'gAnGsTeRs 4 JeSuS', description: 'CoMe b Gz wiTh tHe bigGest G oF them aLL--G-zuz. wE aRe ReBElz WITH a CaUsE. iF u wAnnA wEaR a cOoL leAther jAckEt, sTeaL trAffIc cOnEs anD gEt tO knOw Ur LorD and SaviouR, wE goT RoOm fOr OnE mOrE bRoThEr"},
        {id: 2, user_id: 99902, title: 'New prospects wanted', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet est sollicitudin, tincidunt arcu eget, rhoncus libero. Duis tincidunt pulvinar leo sed iaculis. Cras quis felis auctor, dictum augue eget, mollis mi'},
        {id: 3, user_id: 99903, title: 'Join us: BYO sawn off shotgun', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet est sollicitudin, tincidunt arcu eget, rhoncus libero. Duis tincidunt pulvinar leo sed iaculis. Cras quis felis auctor, dictum augue eget, mollis mi.'}

      ])
    })
}
