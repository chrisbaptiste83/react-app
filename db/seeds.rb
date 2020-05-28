

tactical_packages = [ 

    ["Zombie Machine Gunner", "Tactical package with high capacity round machine gun, three round burst automatic pistol, and plenty of explosives.", "Michael"],

    ["Sniper", "Tactical package with long range, high-caliber sniper rifle, semi-automatic 12 gauge shotgun, and a claymore mine for defense.", "Chris"],
 
    ["Tactical Zombie Killer", "Tactical package with tactical non-automatic assault rifle and deadly close combat equipment.", "Michael"], 

    ["Stationary Zombie Gunner", "Tactical package with high caliber, high recoil, and high capacity round machine gun. Best used for a stationary defense position.", "Chris"],  

    ["Rifleman", "Tactical package great from medium to long-range zombie hunting. Includes a 12 gauge shotgun for extra added firepower.", "Michael"], 

    ["Uzi Pack", "Tactical package with high fire rate submachine gun.", "Michael"], 

    ["AK-47 Pack", "Tactical package with realiable assault rifle and powerful side arm.", "Chris"], 

    ["Classics Pack", "Tactical package with classic, effective weapons.", "Mike"] 

]

tactical_packages.each do |tactical_package|
    TacticalPackage.create( title: tactical_package[0], description: tactical_package[1], creator: tactical_package[2] )
  end

PrimaryWeapon.create(tactical_package_id:"1", name:"Hades", description:"Large machine gun with impressive fire rate, magazine zapacity, and ability to tear through tens of zombies in seconds.", image_url:"https://www.pcgamesn.com/wp-content/uploads/2018/10/black-ops-4-weapons-hades.jpg") 
PrimaryWeapon.create(tactical_package_id:"2", name:"Paladin HB50", description:"This is just like a .50cal with very slow aim down sights time and rate of fire. Naturally, it makes up for it with extremely high damage.", image_url:"https://www.pcgamesn.com/wp-content/uploads/2018/05/Black-Ops-4-weapons-Paladin-HB50-900x507.jpg") 
PrimaryWeapon.create(tactical_package_id:"3", name:"Auger DMR", description:"This designated marksman rifle is all about dealing high damage, with only three or four shots needed to kill a zombie.", image_url:"https://www.pcgamesn.com/wp-content/uploads/2018/10/black-ops-4-weapons-auger-dmr-900x507.jpg") 
PrimaryWeapon.create(tactical_package_id:"4", name:"VKM 750", description:"This massive machine gun deals the highest damage of any machine gun youll ever come across, but it will greatly hinder your mobility.", image_url:"https://www.pcgamesn.com/wp-content/uploads/2018/10/black-ops-weapons-VKM-750-900x507.jpg") 
PrimaryWeapon.create(tactical_package_id:"5", name:"KN-57", description:"You’ll want to get in up close with this one: the KN-57 deals devastating damage at short range.", image_url:"https://www.pcgamesn.com/wp-content/uploads/2018/05/Black-Ops-4-weapons-KN-57-900x507.jpg") 
PrimaryWeapon.create(tactical_package_id:"6", name:"Uzi", description:"Fully automatic open bolt machine gun. This weapon is simple, steady, and effective.", image_url:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/c/ce/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221102.jpg?width=640") 
PrimaryWeapon.create(tactical_package_id:"7", name:"AK-47", description:"Very reliable automatic assault rifle chambered in 7.62mm Soviet. Large caliber ammunition requires skill to control recoil.", image_url:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/a/a1/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221027.jpg?width=640") 
PrimaryWeapon.create(tactical_package_id:"8", name:"MK2 Carbine", description:"Highly accurate lever action rifle. Will neutralize an enemy with one well placed round to the head or chest.", image_url:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/a/a3/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221254.jpg?width=640") 


SecondaryWeapon.create(tactical_package_id:"1", name:"RK 7 Garrison", description:"The speedy rate-of-fire of the RK 7 Garrison’s three-round burst is effective, provided you can control its recoil.", image_url:"https://www.pcgamesn.com/wp-content/uploads/2018/05/Black-Ops-4-weapons-RK7-Garrison-900x507.jpg") 
SecondaryWeapon.create(tactical_package_id:"2", name:"SG12", description:"Its strong mobility and high damage spread make it perfect for close-range encounters.", image_url:"https://www.pcgamesn.com/wp-content/uploads/2018/05/Black-Ops-4-weapons-SG12-900x507.jpg") 
SecondaryWeapon.create(tactical_package_id:"3", name:"Combat Knife", description:"This one-stab killing combat knife will be very effective when caught up in close combat against a hungry rotter.", image_url:"https://www.pcgamesn.com/wp-content/uploads/2018/05/Black-Ops-4-weapons-Combat-knife-900x507.jpg") 
SecondaryWeapon.create(tactical_package_id:"4", name:"Hellion Salvo", description:"Deadly rocket launcher highly effective for destroying mobs of zombies advancing towards your defense position.", image_url:"https://www.pcgamesn.com/wp-content/uploads/2018/05/Black-Ops-4-weapons-Hellion-Salvo-900x507.jpg") 
SecondaryWeapon.create(tactical_package_id:"5", name:"MOG 12", description:"Perfect for clearing buildings and for eliminating zombies from up close.", image_url:"https://www.pcgamesn.com/wp-content/uploads/2018/10/black-ops-4-weapons-mog-12-900x507.jpg") 
SecondaryWeapon.create(tactical_package_id:"6", name:".357", description:"Powerful double action revolver.", image_url:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/f/f0/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221418.jpg?width=640")
SecondaryWeapon.create(tactical_package_id:"7", name:"1911", description:"A well-rounded semi-automatic side arm with a moderate rate of fire. Slightly more range than your average .45 ACP pistol.", image_url:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/c/c1/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221409.jpg?width=640") 
SecondaryWeapon.create(tactical_package_id:"8", name:"725", description:"Break action shotgun with two round capacity. A long back-bored barrel and cylindrical choke keeps spread tight and lethal over extended ranges.", image_url:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/1/1a/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024221150.jpg?width=640")


LethalWeapon.create(tactical_package_id:"1", name:"Semtex", description:"Attaching them to a zombie is going to give you a confirmed kill and blast zombie-killing radius of over 10 meters. However, they’re also useful for attaching to surfaces.", image_url:"https://www.bestgamingsettings.com/wp-content/uploads/2019/11/Semtex.jpg") 
LethalWeapon.create(tactical_package_id:"2", name:"Claymore", description:"The Claymore is the best choice for Sniper defense. Positioning it to keep you safe from an outlook can save you from zombies overcoming your sniping position.", image_url:"https://www.bestgamingsettings.com/wp-content/uploads/2019/11/Claymore.jpg") 
LethalWeapon.create(tactical_package_id:"3", name:"Molotov Cocktail", description:"Perfect for setting a group of zombies on fire and then easily finishing them off.", image_url:"https://www.bestgamingsettings.com/wp-content/uploads/2019/11/Molotov.jpg") 
LethalWeapon.create(tactical_package_id:"4", name:"Proximity Mine", description:"Highly damaging explosive mine perfect for defending your machine gun defense position.", image_url:"https://www.bestgamingsettings.com/wp-content/uploads/2019/11/Proximity.jpg") 
LethalWeapon.create(tactical_package_id:"5", name:"Throwing Grenades", description:"These highly explosive throwing grenades can come very handy during the apocalypse. One can get very creative with these.", image_url:"https://www.bestgamingsettings.com/wp-content/uploads/2019/11/FragGrenade.jpg") 
LethalWeapon.create(tactical_package_id:"6", name:"C4", description:"Explosive that could be remotely detonated.", image_url:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/5/5e/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222027.jpg?width=640") 
LethalWeapon.create(tactical_package_id:"7", name:"Thermite", description:"Burns fiercely for a short while after impact. Sticks to all surfaces.", image_url:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/7/78/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222103.jpg?width=640") 
LethalWeapon.create(tactical_package_id:"8", name:"Throwing Knife", description:"Retrievable knife that is lethal on impact.", image_url:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/c/c2/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222044.jpg?width=640") 


TacticalItem.create(tactical_package_id:"1", name:"Stim", description:"The Stim is useful equipment for prolonging your survivability on the field.", image_url:"https://gamewith-en.akamaized.net/img/dce5b5f4d86f0ebec5a13bba9b55fe83.jpg") 
TacticalItem.create(tactical_package_id:"2", name:"Heartbeat Sensor", description:"The heartbeat sensor is a useful item to scout for enemies close by. Remember zombies are not the only enemies during an apocalypse.", image_url:"https://gamewith-en.akamaized.net/img/d2b7d9bbea74370d132494b3a628b763.jpg") 
TacticalItem.create(tactical_package_id:"3", name:"Snapshot Grenade", description:"This grenade enables you to take a snapshot of potentialy dangerous areas. Awesome for building clearing.", image_url:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/f/f3/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222146.jpg?width=1280") 
TacticalItem.create(tactical_package_id:"4", name:"Smoke Grenade", description:"The Smoke Grenade is perfect for breaking line of sight. If you feel like you are getting overwhelmed, pop some smoke to make it harder for enemies to hit you.", image_url:"https://gamewith-en.akamaized.net/img/f4e8bed38fa7b23f8f7a43e5b081b9f5.jpg") 
TacticalItem.create(tactical_package_id:"5", name:"Flash Grenade", description:"The Flash Grenade is excellent for disorienting enemies. Use this before entering a room to blind enemies, making it easy to eliminate them.", image_url:"https://gamewith-en.akamaized.net/img/34ba6687426dd23150895c9ce7ae4d6f.jpg")
TacticalItem.create(tactical_package_id:"6", name:"Stun Grenade", description:"Slows a victim's movement and aiming.", image_url:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/a/a9/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222124.jpg?width=640")
TacticalItem.create(tactical_package_id:"7", name:"Decoy Grenade", description:"Counter-intel grenade that simulates fake gunfire and radar signatures that confuse the enemy.", image_url:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/d/d7/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222225.jpg?width=640")
TacticalItem.create(tactical_package_id:"8", name:"Gas Grenade", description:"Explodes on impact with the ground, releasing a lingering cloud of tear gas that causes slowed movement, blurred vision, and coughing.", image_url:"https://oyster.ignimgs.com/mediawiki/apis.ign.com/call-of-duty-modern-warfare/a/a8/Call_of_Duty%C2%AE_Modern_Warfare%C2%AE_20191024222205.jpg?width=640")
