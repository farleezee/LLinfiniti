import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../aff6ff37-d8c9-46f5-a9ac-14e524486ffe/src/item"
import Script2 from "../e25d12ec-e349-4c76-9826-1094458e3982/src/item"
import Script3 from "../85cf3207-2792-4349-9938-21fd82ea2168/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const checkeredRug = new Entity('checkeredRug')
engine.addEntity(checkeredRug)
checkeredRug.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(8, 0, 7.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4.5, 1, 7.499998092651367)
})
checkeredRug.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("8ccdbe7a-cddf-4920-bc11-245ebeb90200/Carpet_02/Carpet_02.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
checkeredRug.addComponentOrReplace(gltfShape2)

const roundedStarlightRug = new Entity('roundedStarlightRug')
engine.addEntity(roundedStarlightRug)
roundedStarlightRug.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(8, 0, 7.5),
  rotation: new Quaternion(1.1343739456546264e-15, 2.9802322387695312e-8, -2.6645352591003757e-15, 1),
  scale: new Vector3(1, 1, 1)
})
roundedStarlightRug.addComponentOrReplace(transform4)
const gltfShape3 = new GLTFShape("0b906173-5b55-4c95-9a53-9d9c6ba21fe0/Carpet_02/Carpet_02.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
roundedStarlightRug.addComponentOrReplace(gltfShape3)

const constellationRug = new Entity('constellationRug')
engine.addEntity(constellationRug)
constellationRug.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
constellationRug.addComponentOrReplace(transform5)
const gltfShape4 = new GLTFShape("d46670bf-a528-4680-84a6-39ca83a3caca/Carpet_01/Carpet_01.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
constellationRug.addComponentOrReplace(gltfShape4)

const roofBlueEdgesSmall = new Entity('roofBlueEdgesSmall')
engine.addEntity(roofBlueEdgesSmall)
roofBlueEdgesSmall.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(15.5, 2, 15.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.499999523162842, 1, 7.629828929901123)
})
roofBlueEdgesSmall.addComponentOrReplace(transform6)
const gltfShape5 = new GLTFShape("5842de4c-fc8b-47f4-9e00-74314b6989cc/BlueRoof_4Edges_Small.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
roofBlueEdgesSmall.addComponentOrReplace(gltfShape5)

const wallZigzag = new Entity('wallZigzag')
engine.addEntity(wallZigzag)
wallZigzag.setParent(_scene)
const transform7 = new Transform({
  position: new Vector3(15.065383911132812, 0, 15.569889068603516),
  rotation: new Quaternion(4.440892627896218e-16, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(6.7109198570251465, 1.5, 1.0000073909759521)
})
wallZigzag.addComponentOrReplace(transform7)
const gltfShape6 = new GLTFShape("932f0435-9974-4451-b63a-6967c7faf606/ZigzagWall.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
wallZigzag.addComponentOrReplace(gltfShape6)

const wallPinkBoards = new Entity('wallPinkBoards')
engine.addEntity(wallPinkBoards)
wallPinkBoards.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(15.275983810424805, 0, 0.3779515027999878),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.098593711853027, 1.5, 1.0000007152557373)
})
wallPinkBoards.addComponentOrReplace(transform8)
const gltfShape7 = new GLTFShape("f6fb3031-dc9e-4a10-92a5-ffaac7339e50/PinkBoardsWall.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
wallPinkBoards.addComponentOrReplace(gltfShape7)

const nft = new Entity('nft')
engine.addEntity(nft)
nft.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(13.234013557434082, 3.499999523162842, 15.245672225952148),
  rotation: new Quaternion(3.7608867925764837e-23, -1.4901161193847656e-7, 1.7319906088757858e-14, 1),
  scale: new Vector3(5.000002384185791, 5, 1.0000008344650269)
})
nft.addComponentOrReplace(transform9)
const nftShape = new NFTShape("ethereum://0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756/27469")
nftShape.withCollisions = true
nftShape.isPointerBlocker = true
nftShape.visible = true
nftShape.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft.addComponentOrReplace(nftShape)

const nft2 = new Entity('nft2')
engine.addEntity(nft2)
nft2.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(2.7931768894195557, 3.4745497703552246, 15.22726821899414),
  rotation: new Quaternion(-7.83784319456464e-15, 0.0001688599440967664, -2.0128910691030732e-11, -1),
  scale: new Vector3(5.428811550140381, 4.81174373626709, 1)
})
nft2.addComponentOrReplace(transform10)
const nftShape2 = new NFTShape("ethereum://0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756/18165")
nftShape2.withCollisions = true
nftShape2.isPointerBlocker = true
nftShape2.visible = true
nftShape2.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft2.addComponentOrReplace(nftShape2)

const nft4 = new Entity('nft4')
engine.addEntity(nft4)
nft4.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(0.5, 3.531649351119995, 3.5),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(5, 4, 1.0000028610229492)
})
nft4.addComponentOrReplace(transform11)
const nftShape3 = new NFTShape("ethereum://0x2a187453064356c898cae034eaed119e1663acb8/16126648860995317394878828010027357856923050845760655456955720934373373059274")
nftShape3.withCollisions = true
nftShape3.isPointerBlocker = true
nftShape3.visible = true
nftShape3.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft4.addComponentOrReplace(nftShape3)

const wallZigzag2 = new Entity('wallZigzag2')
engine.addEntity(wallZigzag2)
wallZigzag2.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(0.6716446280479431, 0, 15.285415649414062),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(6.672293186187744, 1.513110637664795, 1.0000019073486328)
})
wallZigzag2.addComponentOrReplace(transform12)
wallZigzag2.addComponentOrReplace(gltfShape6)

const wallZigzag3 = new Entity('wallZigzag3')
engine.addEntity(wallZigzag3)
wallZigzag3.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(15.414546966552734, 0, 15.590168952941895),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.3383002281188965, 1.4979710578918457, 1)
})
wallZigzag3.addComponentOrReplace(transform13)
wallZigzag3.addComponentOrReplace(gltfShape6)

const roundGalleryLight = new Entity('roundGalleryLight')
engine.addEntity(roundGalleryLight)
roundGalleryLight.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(9.627737998962402, 4.8407368659973145, 0.6689205169677734),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(10.491924285888672, 1, 1)
})
roundGalleryLight.addComponentOrReplace(transform14)

const couchThreeSeater = new Entity('couchThreeSeater')
engine.addEntity(couchThreeSeater)
couchThreeSeater.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(2.409144639968872, 0, 7.1673784255981445),
  rotation: new Quaternion(-1.5394153601527394e-15, 0.7071068286895752, -8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.5000052452087402, 1, 1.0000019073486328)
})
couchThreeSeater.addComponentOrReplace(transform15)
const gltfShape8 = new GLTFShape("7ec82823-7d54-4456-9a88-faf48f6098e1/ThreeSeater_Couch.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
couchThreeSeater.addComponentOrReplace(gltfShape8)

const loveseat = new Entity('loveseat')
engine.addEntity(loveseat)
loveseat.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(14.301980972290039, 0, 9.408266067504883),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1.7677202224731445)
})
loveseat.addComponentOrReplace(transform16)
const gltfShape9 = new GLTFShape("c162b72f-3a64-4593-aaa1-a42f614cf9e5/Couch_01/Couch_01.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
loveseat.addComponentOrReplace(gltfShape9)

const table = new Entity('table')
engine.addEntity(table)
table.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(1.88447904586792, 0, 12.889451026916504),
  rotation: new Quaternion(1.865179932974536e-14, 0.7071068286895752, -8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(1.3722492456436157, 1.1271096467971802, 1.227921485900879)
})
table.addComponentOrReplace(transform17)
const gltfShape10 = new GLTFShape("55a98e69-9ec8-4f04-ba26-8764b255dd50/Furnit 1.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
table.addComponentOrReplace(gltfShape10)

const tableLampLight = new Entity('tableLampLight')
engine.addEntity(tableLampLight)
tableLampLight.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(2.09102463722229, 0.9425901174545288, 12.391966819763184),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1.7373554706573486, 1.160747766494751)
})
tableLampLight.addComponentOrReplace(transform18)

const barM = new Entity('barM')
engine.addEntity(barM)
barM.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(15, 0, 6.066803455352783),
  rotation: new Quaternion(-1.5014858600494022e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.3826713562011719, 1.0588927268981934, 1)
})
barM.addComponentOrReplace(transform19)
const gltfShape11 = new GLTFShape("2312b12f-d481-4229-be52-82aa3819a391/Furnit Bar 4 2M.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
barM.addComponentOrReplace(gltfShape11)

const rainLight = new Entity('rainLight')
engine.addEntity(rainLight)
rainLight.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(5, 2, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight.addComponentOrReplace(transform20)

const rainLight2 = new Entity('rainLight2')
engine.addEntity(rainLight2)
rainLight2.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(6.5, 2, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight2.addComponentOrReplace(transform21)

const rainLight3 = new Entity('rainLight3')
engine.addEntity(rainLight3)
rainLight3.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(8, 2, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight3.addComponentOrReplace(transform22)

const rainLight4 = new Entity('rainLight4')
engine.addEntity(rainLight4)
rainLight4.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(9.5, 2, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight4.addComponentOrReplace(transform23)

const rainLight5 = new Entity('rainLight5')
engine.addEntity(rainLight5)
rainLight5.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(5.008172988891602, 2, 9.492817878723145),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight5.addComponentOrReplace(transform24)

const rainLight6 = new Entity('rainLight6')
engine.addEntity(rainLight6)
rainLight6.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(6.508172988891602, 2, 9.492817878723145),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight6.addComponentOrReplace(transform25)

const rainLight7 = new Entity('rainLight7')
engine.addEntity(rainLight7)
rainLight7.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(8.008172988891602, 2, 9.492817878723145),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight7.addComponentOrReplace(transform26)

const rainLight8 = new Entity('rainLight8')
engine.addEntity(rainLight8)
rainLight8.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(9.508172988891602, 2, 9.492817878723145),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight8.addComponentOrReplace(transform27)

const rainLight9 = new Entity('rainLight9')
engine.addEntity(rainLight9)
rainLight9.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(9.490724563598633, 2, 8.510519027709961),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight9.addComponentOrReplace(transform28)

const rainLight10 = new Entity('rainLight10')
engine.addEntity(rainLight10)
rainLight10.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(4.990724563598633, 2, 8.510519027709961),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight10.addComponentOrReplace(transform29)

const rainLight11 = new Entity('rainLight11')
engine.addEntity(rainLight11)
rainLight11.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(4.998897552490234, 2, 7.5033369064331055),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight11.addComponentOrReplace(transform30)

const rainLight12 = new Entity('rainLight12')
engine.addEntity(rainLight12)
rainLight12.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(6.490724563598633, 2, 8.510519027709961),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight12.addComponentOrReplace(transform31)

const rainLight13 = new Entity('rainLight13')
engine.addEntity(rainLight13)
rainLight13.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(7.998897552490234, 2, 7.5033369064331055),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight13.addComponentOrReplace(transform32)

const rainLight14 = new Entity('rainLight14')
engine.addEntity(rainLight14)
rainLight14.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(7.990724563598633, 2, 8.510519027709961),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight14.addComponentOrReplace(transform33)

const rainLight15 = new Entity('rainLight15')
engine.addEntity(rainLight15)
rainLight15.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(6.498897552490234, 2, 7.5033369064331055),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight15.addComponentOrReplace(transform34)

const rainLight16 = new Entity('rainLight16')
engine.addEntity(rainLight16)
rainLight16.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(9.498897552490234, 2, 7.5033369064331055),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight16.addComponentOrReplace(transform35)

const rainLight17 = new Entity('rainLight17')
engine.addEntity(rainLight17)
rainLight17.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(9.499808311462402, 2, 6.508827209472656),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight17.addComponentOrReplace(transform36)

const rainLight18 = new Entity('rainLight18')
engine.addEntity(rainLight18)
rainLight18.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(4.999808311462402, 2, 6.508827209472656),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight18.addComponentOrReplace(transform37)

const rainLight19 = new Entity('rainLight19')
engine.addEntity(rainLight19)
rainLight19.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(5.007981300354004, 2, 5.501645088195801),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight19.addComponentOrReplace(transform38)

const rainLight20 = new Entity('rainLight20')
engine.addEntity(rainLight20)
rainLight20.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(6.499808311462402, 2, 6.508827209472656),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight20.addComponentOrReplace(transform39)

const rainLight21 = new Entity('rainLight21')
engine.addEntity(rainLight21)
rainLight21.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(8.007981300354004, 2, 5.501645088195801),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight21.addComponentOrReplace(transform40)

const rainLight22 = new Entity('rainLight22')
engine.addEntity(rainLight22)
rainLight22.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(7.999808311462402, 2, 6.508827209472656),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight22.addComponentOrReplace(transform41)

const rainLight23 = new Entity('rainLight23')
engine.addEntity(rainLight23)
rainLight23.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(6.507981300354004, 2, 5.501645088195801),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight23.addComponentOrReplace(transform42)

const rainLight24 = new Entity('rainLight24')
engine.addEntity(rainLight24)
rainLight24.setParent(_scene)
const transform43 = new Transform({
  position: new Vector3(9.507980346679688, 2, 5.501645088195801),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight24.addComponentOrReplace(transform43)

const rainLight25 = new Entity('rainLight25')
engine.addEntity(rainLight25)
rainLight25.setParent(_scene)
const transform44 = new Transform({
  position: new Vector3(10.984171867370605, 2, 5.492690086364746),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight25.addComponentOrReplace(transform44)

const rainLight26 = new Entity('rainLight26')
engine.addEntity(rainLight26)
rainLight26.setParent(_scene)
const transform45 = new Transform({
  position: new Vector3(10.975089073181152, 2, 7.494381904602051),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight26.addComponentOrReplace(transform45)

const rainLight27 = new Entity('rainLight27')
engine.addEntity(rainLight27)
rainLight27.setParent(_scene)
const transform46 = new Transform({
  position: new Vector3(10.97599983215332, 2, 6.499872207641602),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight27.addComponentOrReplace(transform46)

const rainLight28 = new Entity('rainLight28')
engine.addEntity(rainLight28)
rainLight28.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(10.98436450958252, 2, 9.48386287689209),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight28.addComponentOrReplace(transform47)

const rainLight29 = new Entity('rainLight29')
engine.addEntity(rainLight29)
rainLight29.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(10.976191520690918, 2, 10.491044998168945),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight29.addComponentOrReplace(transform48)

const rainLight30 = new Entity('rainLight30')
engine.addEntity(rainLight30)
rainLight30.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(10.96691608428955, 2, 8.501564025878906),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
rainLight30.addComponentOrReplace(transform49)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
script1.init(options)
script2.init(options)
script3.init(options)
script1.spawn(roundGalleryLight, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight, channelBus))
script2.spawn(tableLampLight, {"startOn":true,"clickable":true}, createChannel(channelId, tableLampLight, channelBus))
script3.spawn(rainLight, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight, channelBus))
script3.spawn(rainLight2, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight2, channelBus))
script3.spawn(rainLight3, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight3, channelBus))
script3.spawn(rainLight4, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight4, channelBus))
script3.spawn(rainLight5, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight5, channelBus))
script3.spawn(rainLight6, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight6, channelBus))
script3.spawn(rainLight7, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight7, channelBus))
script3.spawn(rainLight8, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight8, channelBus))
script3.spawn(rainLight9, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight9, channelBus))
script3.spawn(rainLight10, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight10, channelBus))
script3.spawn(rainLight11, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight11, channelBus))
script3.spawn(rainLight12, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight12, channelBus))
script3.spawn(rainLight13, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight13, channelBus))
script3.spawn(rainLight14, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight14, channelBus))
script3.spawn(rainLight15, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight15, channelBus))
script3.spawn(rainLight16, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight16, channelBus))
script3.spawn(rainLight17, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight17, channelBus))
script3.spawn(rainLight18, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight18, channelBus))
script3.spawn(rainLight19, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight19, channelBus))
script3.spawn(rainLight20, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight20, channelBus))
script3.spawn(rainLight21, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight21, channelBus))
script3.spawn(rainLight22, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight22, channelBus))
script3.spawn(rainLight23, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight23, channelBus))
script3.spawn(rainLight24, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight24, channelBus))
script3.spawn(rainLight25, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight25, channelBus))
script3.spawn(rainLight26, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight26, channelBus))
script3.spawn(rainLight27, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight27, channelBus))
script3.spawn(rainLight28, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight28, channelBus))
script3.spawn(rainLight29, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight29, channelBus))
script3.spawn(rainLight30, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight30, channelBus))