
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
