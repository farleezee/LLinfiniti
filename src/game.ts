import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../e25d12ec-e349-4c76-9826-1094458e3982/src/item"
import Script2 from "../aff6ff37-d8c9-46f5-a9ac-14e524486ffe/src/item"
import Script3 from "../85cf3207-2792-4349-9938-21fd82ea2168/src/item"
import Script4 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"
import Script5 from "../0ee46c79-338c-445a-a506-ea26d80fbe46/src/item"
import Script6 from "../ed36149f-76c5-45c4-a678-d4b31c4ed9ca/src/item"
import Script7 from "../e7a6c753-ea84-4c8e-bb94-4523407a5d55/src/item"
import Script8 from "../fa423878-fbbe-4333-80a8-3d3f2dbe5889/src/item"
import Script9 from "../901e4555-8743-49bb-854c-c8b354a3e3e1/src/item"

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

const roofBlueEdgesSmall = new Entity('roofBlueEdgesSmall')
engine.addEntity(roofBlueEdgesSmall)
roofBlueEdgesSmall.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(15.973541259765625, 7.926928520202637, 15.999805450439453),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.960358142852783, 1, 6.3058929443359375)
})
roofBlueEdgesSmall.addComponentOrReplace(transform3)
const gltfShape2 = new GLTFShape("5842de4c-fc8b-47f4-9e00-74314b6989cc/BlueRoof_4Edges_Small.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
roofBlueEdgesSmall.addComponentOrReplace(gltfShape2)

const nft = new Entity('nft')
engine.addEntity(nft)
nft.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(13.234013557434082, 9.5, 15.645221710205078),
  rotation: new Quaternion(3.7608867925764837e-23, -1.4901161193847656e-7, 1.7319906088757858e-14, 1),
  scale: new Vector3(5.000002384185791, 5, 1.0000008344650269)
})
nft.addComponentOrReplace(transform4)
const nftShape = new NFTShape("ethereum://0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756/27469")
nftShape.withCollisions = true
nftShape.isPointerBlocker = true
nftShape.visible = true
nftShape.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft.addComponentOrReplace(nftShape)

const nft2 = new Entity('nft2')
engine.addEntity(nft2)
nft2.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(2.7931766510009766, 9.474550247192383, 15.591558456420898),
  rotation: new Quaternion(-7.83784319456464e-15, 0.0001688599440967664, -2.0128910691030732e-11, -1),
  scale: new Vector3(5.428791046142578, 4.81174373626709, 1)
})
nft2.addComponentOrReplace(transform5)
const nftShape2 = new NFTShape("ethereum://0x2a46f2ffd99e19a89476e2f62270e0a35bbf0756/18165")
nftShape2.withCollisions = true
nftShape2.isPointerBlocker = true
nftShape2.visible = true
nftShape2.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft2.addComponentOrReplace(nftShape2)

const tableLampLight = new Entity('tableLampLight')
engine.addEntity(tableLampLight)
tableLampLight.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(5.331078052520752, 6.8182854652404785, 1.0086692571640015),
  rotation: new Quaternion(-4.504429098665355e-16, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(0.6755490303039551, 1.4100017547607422, 0.9797425270080566)
})
tableLampLight.addComponentOrReplace(transform6)

const wallZigzag4 = new Entity('wallZigzag4')
engine.addEntity(wallZigzag4)
wallZigzag4.setParent(_scene)
const gltfShape3 = new GLTFShape("932f0435-9974-4451-b63a-6967c7faf606/ZigzagWall.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
wallZigzag4.addComponentOrReplace(gltfShape3)
const transform7 = new Transform({
  position: new Vector3(15.682846069335938, 6, 15.958304405212402),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.665249824523926, 1.4979710578918457, 1)
})
wallZigzag4.addComponentOrReplace(transform7)

const wallZigzag5 = new Entity('wallZigzag5')
engine.addEntity(wallZigzag5)
wallZigzag5.setParent(_scene)
wallZigzag5.addComponentOrReplace(gltfShape3)
const transform8 = new Transform({
  position: new Vector3(0.038910865783691406, 6, 15.99374771118164),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(7.9462432861328125, 1.513110637664795, 1.0000030994415283)
})
wallZigzag5.addComponentOrReplace(transform8)

const wallZigzag6 = new Entity('wallZigzag6')
engine.addEntity(wallZigzag6)
wallZigzag6.setParent(_scene)
wallZigzag6.addComponentOrReplace(gltfShape3)
const transform9 = new Transform({
  position: new Vector3(15.655570983886719, 6, 16),
  rotation: new Quaternion(4.440892627896218e-16, 0.7071068286895752, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(7.924208641052246, 1.5, 1.000009536743164)
})
wallZigzag6.addComponentOrReplace(transform9)

const roundGalleryLight2 = new Entity('roundGalleryLight2')
engine.addEntity(roundGalleryLight2)
roundGalleryLight2.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(9.169185638427734, 11.340736389160156, 0.6689205765724182),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(10.491924285888672, 1, 1)
})
roundGalleryLight2.addComponentOrReplace(transform10)

const wallPlainBlack2 = new Entity('wallPlainBlack2')
engine.addEntity(wallPlainBlack2)
wallPlainBlack2.setParent(_scene)
const gltfShape4 = new GLTFShape("d36f333b-c736-4db8-a5e2-6ab47d4364b9/PlainBlackWall.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
wallPlainBlack2.addComponentOrReplace(gltfShape4)
const transform11 = new Transform({
  position: new Vector3(15.989059448242188, 6, 0.30331411957740784),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(7.907075881958008, 1.5, 1)
})
wallPlainBlack2.addComponentOrReplace(transform11)

const rainLight17 = new Entity('rainLight17')
engine.addEntity(rainLight17)
rainLight17.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(10.5, 8, 4),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight17.addComponentOrReplace(transform12)

const rainLight18 = new Entity('rainLight18')
engine.addEntity(rainLight18)
rainLight18.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(10.5, 8, 1.711172103881836),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight18.addComponentOrReplace(transform13)

const rainLight20 = new Entity('rainLight20')
engine.addEntity(rainLight20)
rainLight20.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(10.5, 8.000000953674316, 6.288827896118164),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight20.addComponentOrReplace(transform14)

const rainLight22 = new Entity('rainLight22')
engine.addEntity(rainLight22)
rainLight22.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(9.5, 8, 6.288827896118164),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight22.addComponentOrReplace(transform15)

const rainLight24 = new Entity('rainLight24')
engine.addEntity(rainLight24)
rainLight24.setParent(_scene)
const transform16 = new Transform({
  position: new Vector3(9.5, 8, 4),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight24.addComponentOrReplace(transform16)

const rainLight25 = new Entity('rainLight25')
engine.addEntity(rainLight25)
rainLight25.setParent(_scene)
const transform17 = new Transform({
  position: new Vector3(9.5, 8, 1.711172103881836),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight25.addComponentOrReplace(transform17)

const rainLight26 = new Entity('rainLight26')
engine.addEntity(rainLight26)
rainLight26.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(8.5, 8, 1.711172103881836),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight26.addComponentOrReplace(transform18)

const rainLight27 = new Entity('rainLight27')
engine.addEntity(rainLight27)
rainLight27.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(8.5, 8, 4),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight27.addComponentOrReplace(transform19)

const rainLight28 = new Entity('rainLight28')
engine.addEntity(rainLight28)
rainLight28.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(8.5, 8, 6.288827896118164),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight28.addComponentOrReplace(transform20)

const rainLight29 = new Entity('rainLight29')
engine.addEntity(rainLight29)
rainLight29.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(7.5, 8, 6.288827896118164),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight29.addComponentOrReplace(transform21)

const rainLight30 = new Entity('rainLight30')
engine.addEntity(rainLight30)
rainLight30.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(7.5, 8, 4),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight30.addComponentOrReplace(transform22)

const rainLight31 = new Entity('rainLight31')
engine.addEntity(rainLight31)
rainLight31.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(7.5, 7.999999523162842, 1.711172103881836),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight31.addComponentOrReplace(transform23)

const rainLight32 = new Entity('rainLight32')
engine.addEntity(rainLight32)
rainLight32.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(6.5, 7.999999523162842, 1.711172103881836),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight32.addComponentOrReplace(transform24)

const rainLight33 = new Entity('rainLight33')
engine.addEntity(rainLight33)
rainLight33.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(6.5, 8, 4),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight33.addComponentOrReplace(transform25)

const rainLight34 = new Entity('rainLight34')
engine.addEntity(rainLight34)
rainLight34.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(6.5, 8, 6.288827896118164),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight34.addComponentOrReplace(transform26)

const rainLight35 = new Entity('rainLight35')
engine.addEntity(rainLight35)
rainLight35.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(5.5, 8, 6.288827896118164),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight35.addComponentOrReplace(transform27)

const rainLight36 = new Entity('rainLight36')
engine.addEntity(rainLight36)
rainLight36.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(5.5, 7.999999523162842, 4),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight36.addComponentOrReplace(transform28)

const rainLight37 = new Entity('rainLight37')
engine.addEntity(rainLight37)
rainLight37.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(5.5, 7.999999523162842, 1.711172103881836),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight37.addComponentOrReplace(transform29)

const barM2 = new Entity('barM2')
engine.addEntity(barM2)
barM2.setParent(_scene)
const gltfShape5 = new GLTFShape("2312b12f-d481-4229-be52-82aa3819a391/Furnit Bar 4 2M.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
barM2.addComponentOrReplace(gltfShape5)
const transform30 = new Transform({
  position: new Vector3(15.590631484985352, 6.033209800720215, 4.19081974029541),
  rotation: new Quaternion(-1.5014858600494022e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071067690849304),
  scale: new Vector3(1.3653874397277832, 0.9241806864738464, 0.7499998807907104)
})
barM2.addComponentOrReplace(transform30)

const loveseat2 = new Entity('loveseat2')
engine.addEntity(loveseat2)
loveseat2.setParent(_scene)
const gltfShape6 = new GLTFShape("c162b72f-3a64-4593-aaa1-a42f614cf9e5/Couch_01/Couch_01.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
loveseat2.addComponentOrReplace(gltfShape6)
const transform31 = new Transform({
  position: new Vector3(15.137181282043457, 6.037120819091797, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6854026317596436, 1.1398943662643433, 1.76155424118042)
})
loveseat2.addComponentOrReplace(transform31)

const table2 = new Entity('table2')
engine.addEntity(table2)
table2.setParent(_scene)
const gltfShape7 = new GLTFShape("55a98e69-9ec8-4f04-ba26-8764b255dd50/Furnit 1.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
table2.addComponentOrReplace(gltfShape7)
const transform32 = new Transform({
  position: new Vector3(4.911175727844238, 6.053297996520996, 0.8691387176513672),
  rotation: new Quaternion(-3.4823604774542744e-14, 0, 6.786915440862599e-15, -1),
  scale: new Vector3(1.1582446098327637, 0.9147389531135559, 0.829517126083374)
})
table2.addComponentOrReplace(transform32)

const floorBlack = new Entity('floorBlack')
engine.addEntity(floorBlack)
floorBlack.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(4, 1, 4)
})
floorBlack.addComponentOrReplace(transform33)
const gltfShape8 = new GLTFShape("94bbf88f-cd93-4531-8bda-d93e8dfffb8f/BlackFloor.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
floorBlack.addComponentOrReplace(gltfShape8)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(0, 0.045874595642089844, 6.778176784515381),
  rotation: new Quaternion(-0.5000000596046448, -0.5000000596046448, -0.49999988079071045, 0.5),
  scale: new Vector3(12.725432395935059, 12.236347198486328, 1.0000020265579224)
})
imageFromURL.addComponentOrReplace(transform34)

const floorBlack2 = new Entity('floorBlack2')
engine.addEntity(floorBlack2)
floorBlack2.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(16, 6, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3, 1, 3.9916467666625977)
})
floorBlack2.addComponentOrReplace(transform35)
floorBlack2.addComponentOrReplace(gltfShape8)

const floorBlack4 = new Entity('floorBlack4')
engine.addEntity(floorBlack4)
floorBlack4.setParent(_scene)
floorBlack4.addComponentOrReplace(gltfShape8)
const transform36 = new Transform({
  position: new Vector3(4, 6, 13.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 3.300143241882324)
})
floorBlack4.addComponentOrReplace(transform36)

const bedKing = new Entity('bedKing')
engine.addEntity(bedKing)
bedKing.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(9.673964500427246, 6.031590461730957, 0.25968265533447266),
  rotation: new Quaternion(-6.5671565543457336e-15, 0, 6.5551651089114545e-15, -1),
  scale: new Vector3(1.966252326965332, 1.092629075050354, 1.700695276260376)
})
bedKing.addComponentOrReplace(transform37)
const gltfShape9 = new GLTFShape("46b54f75-ad9d-4b63-98ac-a733c4088998/Bed King.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
bedKing.addComponentOrReplace(gltfShape9)

const classroomChair = new Entity('classroomChair')
engine.addEntity(classroomChair)
classroomChair.setParent(_scene)
const transform38 = new Transform({
  position: new Vector3(2, 6.047607421875, 9),
  rotation: new Quaternion(-3.2954483851374517e-15, 0.9238795638084412, -1.1013500511580787e-7, -0.3826834559440613),
  scale: new Vector3(1.2881693840026855, 1.1848896741867065, 1.2881693840026855)
})
classroomChair.addComponentOrReplace(transform38)
const gltfShape10 = new GLTFShape("aebf6e6b-4839-47de-a0c7-79877085dc13/Chair_02/Chair_02.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
classroomChair.addComponentOrReplace(gltfShape10)

const windowFullWall = new Entity('windowFullWall')
engine.addEntity(windowFullWall)
windowFullWall.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(0, 0, 15.66015625),
  rotation: new Quaternion(-3.0239323974115594e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.104063630104065, 1.5, 1.0000019073486328)
})
windowFullWall.addComponentOrReplace(transform39)
const gltfShape11 = new GLTFShape("7cd98940-78b6-4b61-af5d-da43f3360022/FullWallWindow.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
windowFullWall.addComponentOrReplace(gltfShape11)

const teleport = new Entity('teleport')
engine.addEntity(teleport)
teleport.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(6, 0.06402397155761719, 10.906084060668945),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
teleport.addComponentOrReplace(transform40)

const imageFromURL2 = new Entity('imageFromURL2')
engine.addEntity(imageFromURL2)
imageFromURL2.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(6, 0, 13.127887725830078),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(11.340924263000488, 6, 1.0000003576278687)
})
imageFromURL2.addComponentOrReplace(transform41)

const wallPlainBlack = new Entity('wallPlainBlack')
engine.addEntity(wallPlainBlack)
wallPlainBlack.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(9.000000953674316, 0, 15.693574905395508),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(3.5, 1.5, 1)
})
wallPlainBlack.addComponentOrReplace(transform42)
wallPlainBlack.addComponentOrReplace(gltfShape4)

const wallPlainBlack3 = new Entity('wallPlainBlack3')
engine.addEntity(wallPlainBlack3)
wallPlainBlack3.setParent(_scene)
wallPlainBlack3.addComponentOrReplace(gltfShape4)
const transform43 = new Transform({
  position: new Vector3(8.92425537109375, 0, 13.162420272827148),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1.7812745571136475, 1.5, 1)
})
wallPlainBlack3.addComponentOrReplace(transform43)

const wallPlainBlack4 = new Entity('wallPlainBlack4')
engine.addEntity(wallPlainBlack4)
wallPlainBlack4.setParent(_scene)
wallPlainBlack4.addComponentOrReplace(gltfShape4)
const transform44 = new Transform({
  position: new Vector3(15.68528938293457, 0, 15.85258674621582),
  rotation: new Quaternion(-4.127578846475997e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(7.842257499694824, 1.5, 1.0000009536743164)
})
wallPlainBlack4.addComponentOrReplace(transform44)

const wallPlainBlack5 = new Entity('wallPlainBlack5')
engine.addEntity(wallPlainBlack5)
wallPlainBlack5.setParent(_scene)
wallPlainBlack5.addComponentOrReplace(gltfShape4)
const transform45 = new Transform({
  position: new Vector3(12.18528938293457, 0, 13.16261100769043),
  rotation: new Quaternion(-4.127578846475997e-15, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(4.879998683929443, 1.5, 1.000002384185791)
})
wallPlainBlack5.addComponentOrReplace(transform45)

const wallPlainBlack6 = new Entity('wallPlainBlack6')
engine.addEntity(wallPlainBlack6)
wallPlainBlack6.setParent(_scene)
wallPlainBlack6.addComponentOrReplace(gltfShape4)
const transform46 = new Transform({
  position: new Vector3(15.985000610351562, 0, 0.35370635986328125),
  rotation: new Quaternion(1.7226053991169134e-15, 0, 6.0168951526891334e-15, -1),
  scale: new Vector3(7.9713239669799805, 1.5, 1.0000026226043701)
})
wallPlainBlack6.addComponentOrReplace(transform46)

const imageFromURL3 = new Entity('imageFromURL3')
engine.addEntity(imageFromURL3)
imageFromURL3.setParent(_scene)
const transform47 = new Transform({
  position: new Vector3(15.629987716674805, 1.1490886211395264, 2),
  rotation: new Quaternion(2.7402813921668283e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(2.250007390975952, 3, 1.0000028610229492)
})
imageFromURL3.addComponentOrReplace(transform47)

const rainLight = new Entity('rainLight')
engine.addEntity(rainLight)
rainLight.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(10.51063060760498, 8, 11.900164604187012),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight.addComponentOrReplace(transform48)

const rainLight2 = new Entity('rainLight2')
engine.addEntity(rainLight2)
rainLight2.setParent(_scene)
const transform49 = new Transform({
  position: new Vector3(10.51063060760498, 8, 9.611336708068848),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight2.addComponentOrReplace(transform49)

const rainLight3 = new Entity('rainLight3')
engine.addEntity(rainLight3)
rainLight3.setParent(_scene)
const transform50 = new Transform({
  position: new Vector3(10.51063060760498, 8.000000953674316, 14.188992500305176),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight3.addComponentOrReplace(transform50)

const rainLight4 = new Entity('rainLight4')
engine.addEntity(rainLight4)
rainLight4.setParent(_scene)
const transform51 = new Transform({
  position: new Vector3(9.51063060760498, 8, 14.188992500305176),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight4.addComponentOrReplace(transform51)

const rainLight5 = new Entity('rainLight5')
engine.addEntity(rainLight5)
rainLight5.setParent(_scene)
const transform52 = new Transform({
  position: new Vector3(9.51063060760498, 8, 11.900164604187012),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight5.addComponentOrReplace(transform52)

const rainLight6 = new Entity('rainLight6')
engine.addEntity(rainLight6)
rainLight6.setParent(_scene)
const transform53 = new Transform({
  position: new Vector3(9.51063060760498, 8, 9.611336708068848),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight6.addComponentOrReplace(transform53)

const rainLight7 = new Entity('rainLight7')
engine.addEntity(rainLight7)
rainLight7.setParent(_scene)
const transform54 = new Transform({
  position: new Vector3(8.51063060760498, 8, 14.188992500305176),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight7.addComponentOrReplace(transform54)

const rainLight8 = new Entity('rainLight8')
engine.addEntity(rainLight8)
rainLight8.setParent(_scene)
const transform55 = new Transform({
  position: new Vector3(8.51063060760498, 8, 11.900164604187012),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight8.addComponentOrReplace(transform55)

const rainLight9 = new Entity('rainLight9')
engine.addEntity(rainLight9)
rainLight9.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(8.51063060760498, 8, 9.611336708068848),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight9.addComponentOrReplace(transform56)

const rainLight10 = new Entity('rainLight10')
engine.addEntity(rainLight10)
rainLight10.setParent(_scene)
const transform57 = new Transform({
  position: new Vector3(7.5106306076049805, 8, 14.188992500305176),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight10.addComponentOrReplace(transform57)

const rainLight11 = new Entity('rainLight11')
engine.addEntity(rainLight11)
rainLight11.setParent(_scene)
const transform58 = new Transform({
  position: new Vector3(7.5106306076049805, 8, 11.900164604187012),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight11.addComponentOrReplace(transform58)

const rainLight12 = new Entity('rainLight12')
engine.addEntity(rainLight12)
rainLight12.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(7.5106306076049805, 7.999999523162842, 9.611336708068848),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight12.addComponentOrReplace(transform59)

const rainLight13 = new Entity('rainLight13')
engine.addEntity(rainLight13)
rainLight13.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(6.5106306076049805, 7.999999523162842, 9.611336708068848),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight13.addComponentOrReplace(transform60)

const rainLight14 = new Entity('rainLight14')
engine.addEntity(rainLight14)
rainLight14.setParent(_scene)
const transform61 = new Transform({
  position: new Vector3(6.5106306076049805, 8, 11.900164604187012),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight14.addComponentOrReplace(transform61)

const rainLight15 = new Entity('rainLight15')
engine.addEntity(rainLight15)
rainLight15.setParent(_scene)
const transform62 = new Transform({
  position: new Vector3(6.5106306076049805, 8, 14.188992500305176),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight15.addComponentOrReplace(transform62)

const rainLight16 = new Entity('rainLight16')
engine.addEntity(rainLight16)
rainLight16.setParent(_scene)
const transform63 = new Transform({
  position: new Vector3(5.5106306076049805, 7.999999523162842, 9.611336708068848),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight16.addComponentOrReplace(transform63)

const rainLight19 = new Entity('rainLight19')
engine.addEntity(rainLight19)
rainLight19.setParent(_scene)
const transform64 = new Transform({
  position: new Vector3(5.5106306076049805, 8, 14.188992500305176),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight19.addComponentOrReplace(transform64)

const rainLight21 = new Entity('rainLight21')
engine.addEntity(rainLight21)
rainLight21.setParent(_scene)
const transform65 = new Transform({
  position: new Vector3(5.5106306076049805, 7.999999523162842, 11.900164604187012),
  rotation: new Quaternion(3.703017981224882e-15, 0.7071067690849304, -8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(1.5258851051330566, 1, 1)
})
rainLight21.addComponentOrReplace(transform65)

const woodenDoor = new Entity('woodenDoor')
engine.addEntity(woodenDoor)
woodenDoor.setParent(_scene)
const transform66 = new Transform({
  position: new Vector3(9.075021743774414, 0, 13.5),
  rotation: new Quaternion(2.5086655266960602e-15, 0.7071067690849304, -8.429368136830817e-8, 0.7071068286895752),
  scale: new Vector3(1.309472918510437, 1.81752610206604, 1)
})
woodenDoor.addComponentOrReplace(transform66)

const floorBlackSmall = new Entity('floorBlackSmall')
engine.addEntity(floorBlackSmall)
floorBlackSmall.setParent(_scene)
const transform67 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
floorBlackSmall.addComponentOrReplace(transform67)
const gltfShape12 = new GLTFShape("b726fb2a-49dd-4cb0-9305-94a8ba66c706/BlackFloor_Small.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
floorBlackSmall.addComponentOrReplace(gltfShape12)

const wallPlainBlack7 = new Entity('wallPlainBlack7')
engine.addEntity(wallPlainBlack7)
wallPlainBlack7.setParent(_scene)
wallPlainBlack7.addComponentOrReplace(gltfShape4)
const transform68 = new Transform({
  position: new Vector3(8.344650268554688e-7, 0, 13.193574905395508),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(4.643612861633301, 1.5, 1)
})
wallPlainBlack7.addComponentOrReplace(transform68)

const wallPlainBlack8 = new Entity('wallPlainBlack8')
engine.addEntity(wallPlainBlack8)
wallPlainBlack8.setParent(_scene)
wallPlainBlack8.addComponentOrReplace(gltfShape4)
const transform69 = new Transform({
  position: new Vector3(8.344650268554688e-7, 0, 15.693574905395508),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(4.643612861633301, 1.5, 1)
})
wallPlainBlack8.addComponentOrReplace(transform69)

const floorBlackSmall3 = new Entity('floorBlackSmall3')
engine.addEntity(floorBlackSmall3)
floorBlackSmall3.setParent(_scene)
const transform70 = new Transform({
  position: new Vector3(12.452266693115234, 0, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(6.179222106933594, 1, 1.2927701473236084)
})
floorBlackSmall3.addComponentOrReplace(transform70)
floorBlackSmall3.addComponentOrReplace(gltfShape12)

const messageBubble = new Entity('messageBubble')
engine.addEntity(messageBubble)
messageBubble.setParent(_scene)
const transform71 = new Transform({
  position: new Vector3(1.8842837810516357, 7.5, 6.677926063537598),
  rotation: new Quaternion(3.827649985567406e-15, 0.8601371645927429, -1.0253632609646957e-7, -0.5100628733634949),
  scale: new Vector3(0.8491899371147156, 0.5651199817657471, 0.8491899371147156)
})
messageBubble.addComponentOrReplace(transform71)

const imageFromURL4 = new Entity('imageFromURL4')
engine.addEntity(imageFromURL4)
imageFromURL4.setParent(_scene)
const transform72 = new Transform({
  position: new Vector3(14.129987716674805, 1.1490886211395264, 15.678303718566895),
  rotation: new Quaternion(8.491404711061874e-16, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(2.2500083446502686, 3, 1.0000033378601074)
})
imageFromURL4.addComponentOrReplace(transform72)

const verticalYellowPad = new Entity('verticalYellowPad')
engine.addEntity(verticalYellowPad)
verticalYellowPad.setParent(_scene)
const transform73 = new Transform({
  position: new Vector3(2.180575132369995, 0, 14.558629989624023),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.177315592765808, 1, 0.8498439192771912)
})
verticalYellowPad.addComponentOrReplace(transform73)

const roofBlueEdgesSmall2 = new Entity('roofBlueEdgesSmall2')
engine.addEntity(roofBlueEdgesSmall2)
roofBlueEdgesSmall2.setParent(_scene)
roofBlueEdgesSmall2.addComponentOrReplace(gltfShape2)
const transform74 = new Transform({
  position: new Vector3(3.5639562606811523, 7.926928520202637, 0),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(6.213881015777588, 1, 1.7234196662902832)
})
roofBlueEdgesSmall2.addComponentOrReplace(transform74)

const verticalYellowPad3 = new Entity('verticalYellowPad3')
engine.addEntity(verticalYellowPad3)
verticalYellowPad3.setParent(_scene)
const transform75 = new Transform({
  position: new Vector3(1.9175045490264893, 6.5, 1.7064499855041504),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.106339931488037, 1, 0.8357052206993103)
})
verticalYellowPad3.addComponentOrReplace(transform75)

const imageFromURL5 = new Entity('imageFromURL5')
engine.addEntity(imageFromURL5)
imageFromURL5.setParent(_scene)
const transform76 = new Transform({
  position: new Vector3(7.951347351074219, 6.038809299468994, 13.522229194641113),
  rotation: new Quaternion(-0.7071068286895752, 0, 7.706243820848613e-8, 0.7071068286895752),
  scale: new Vector3(15.702912330627441, 13.476907730102539, 1.0000128746032715)
})
imageFromURL5.addComponentOrReplace(transform76)

const imageFromURL6 = new Entity('imageFromURL6')
engine.addEntity(imageFromURL6)
imageFromURL6.setParent(_scene)
const transform77 = new Transform({
  position: new Vector3(6.264980316162109, 0, 0.3725128173828125),
  rotation: new Quaternion(2.6094665512755983e-22, -4.470348358154297e-8, -6.549226137401781e-15, 1),
  scale: new Vector3(12.35211181640625, 6, 1.0000003576278687)
})
imageFromURL6.addComponentOrReplace(transform77)

const imageFromURL7 = new Entity('imageFromURL7')
engine.addEntity(imageFromURL7)
imageFromURL7.setParent(_scene)
const transform78 = new Transform({
  position: new Vector3(13.358409881591797, 8.5, 15.642740249633789),
  rotation: new Quaternion(-1.0818954476602468e-14, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(5.262127876281738, 2, 1.0000030994415283)
})
imageFromURL7.addComponentOrReplace(transform78)

const imageFromURL8 = new Entity('imageFromURL8')
engine.addEntity(imageFromURL8)
imageFromURL8.setParent(_scene)
const transform79 = new Transform({
  position: new Vector3(8.096281051635742, 8.5, 15.642740249633789),
  rotation: new Quaternion(-1.0818954476602468e-14, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(5.262126922607422, 2, 1.0000033378601074)
})
imageFromURL8.addComponentOrReplace(transform79)

const imageFromURL9 = new Entity('imageFromURL9')
engine.addEntity(imageFromURL9)
imageFromURL9.setParent(_scene)
const transform80 = new Transform({
  position: new Vector3(2.8341526985168457, 8.5, 15.642740249633789),
  rotation: new Quaternion(-1.0818954476602468e-14, 1, -1.1920927533992653e-7, 0),
  scale: new Vector3(5.262125492095947, 2, 1.0000035762786865)
})
imageFromURL9.addComponentOrReplace(transform80)

const imageFromURL10 = new Entity('imageFromURL10')
engine.addEntity(imageFromURL10)
imageFromURL10.setParent(_scene)
const transform81 = new Transform({
  position: new Vector3(0.34868812561035156, 8.499998092651367, 2.86142635345459),
  rotation: new Quaternion(-4.084899820879168e-15, -0.7071068286895752, 8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(5.138566493988037, 2, 1.000004768371582)
})
imageFromURL10.addComponentOrReplace(transform81)

const imageFromURL11 = new Entity('imageFromURL11')
engine.addEntity(imageFromURL11)
imageFromURL11.setParent(_scene)
const transform82 = new Transform({
  position: new Vector3(0, 8.5, 8.063704490661621),
  rotation: new Quaternion(-1.08028566154399e-14, 0.7071068286895752, -8.42937097900176e-8, -0.7071068286895752),
  scale: new Vector3(5.2858757972717285, 2, 1.0000054836273193)
})
imageFromURL11.addComponentOrReplace(transform82)

const imageFromURL12 = new Entity('imageFromURL12')
engine.addEntity(imageFromURL12)
imageFromURL12.setParent(_scene)
const transform83 = new Transform({
  position: new Vector3(0, 8.5, 2.7778196334838867),
  rotation: new Quaternion(-1.08028566154399e-14, 0.7071068286895752, -8.42937097900176e-8, -0.7071068286895752),
  scale: new Vector3(5.285879611968994, 2, 1.0000052452087402)
})
imageFromURL12.addComponentOrReplace(transform83)

const imageFromURL13 = new Entity('imageFromURL13')
engine.addEntity(imageFromURL13)
imageFromURL13.setParent(_scene)
const transform84 = new Transform({
  position: new Vector3(15.646045684814453, 8.5, 13.13857364654541),
  rotation: new Quaternion(1.1190326754963696e-14, -0.7071068286895752, 8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(5.138564586639404, 2, 1.0000064373016357)
})
imageFromURL13.addComponentOrReplace(transform84)

const imageFromURL14 = new Entity('imageFromURL14')
engine.addEntity(imageFromURL14)
imageFromURL14.setParent(_scene)
const transform85 = new Transform({
  position: new Vector3(15.646045684814453, 8.5, 8),
  rotation: new Quaternion(1.1190326754963696e-14, -0.7071068286895752, 8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(5.138563632965088, 2, 1.0000061988830566)
})
imageFromURL14.addComponentOrReplace(transform85)

const imageFromURL15 = new Entity('imageFromURL15')
engine.addEntity(imageFromURL15)
imageFromURL15.setParent(_scene)
const transform86 = new Transform({
  position: new Vector3(15.646045684814453, 8.5, 2.86142635345459),
  rotation: new Quaternion(1.1190326754963696e-14, -0.7071068286895752, 8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(5.13856840133667, 2, 1.0000059604644775)
})
imageFromURL15.addComponentOrReplace(transform86)

const imageFromURL16 = new Entity('imageFromURL16')
engine.addEntity(imageFromURL16)
imageFromURL16.setParent(_scene)
const transform87 = new Transform({
  position: new Vector3(7.621404647827148, 6.002869129180908, 0.3269157409667969),
  rotation: new Quaternion(2.103507899277584e-14, 0, 8.193957868446976e-15, 1),
  scale: new Vector3(8.023640632629395, 5.908914566040039, 1.0000057220458984)
})
imageFromURL16.addComponentOrReplace(transform87)

const imageFromURL17 = new Entity('imageFromURL17')
engine.addEntity(imageFromURL17)
imageFromURL17.setParent(_scene)
const transform88 = new Transform({
  position: new Vector3(0, 8.5, 13.349589347839355),
  rotation: new Quaternion(-1.08028566154399e-14, 0.7071068286895752, -8.42937097900176e-8, -0.7071068286895752),
  scale: new Vector3(5.285874366760254, 2, 1.0000057220458984)
})
imageFromURL17.addComponentOrReplace(transform88)

const imageFromURL18 = new Entity('imageFromURL18')
engine.addEntity(imageFromURL18)
imageFromURL18.setParent(_scene)
const transform89 = new Transform({
  position: new Vector3(0.3486880660057068, 8.5, 8),
  rotation: new Quaternion(-4.084899820879168e-15, -0.7071068286895752, 8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(5.138565540313721, 2, 1.000004529953003)
})
imageFromURL18.addComponentOrReplace(transform89)

const imageFromURL19 = new Entity('imageFromURL19')
engine.addEntity(imageFromURL19)
imageFromURL19.setParent(_scene)
const transform90 = new Transform({
  position: new Vector3(0.3486880660057068, 8.500001907348633, 13.13857364654541),
  rotation: new Quaternion(-4.084899820879168e-15, -0.7071068286895752, 8.429370268459024e-8, -0.7071068286895752),
  scale: new Vector3(5.13856840133667, 2, 1.0000042915344238)
})
imageFromURL19.addComponentOrReplace(transform90)

const imageFromURL20 = new Entity('imageFromURL20')
engine.addEntity(imageFromURL20)
imageFromURL20.setParent(_scene)
const transform91 = new Transform({
  position: new Vector3(13.285886764526367, 8.499998092651367, 15.97330093383789),
  rotation: new Quaternion(2.94207407459772e-14, 0, 1.3745164471131062e-14, 1),
  scale: new Vector3(5.285878658294678, 2, 1.0000057220458984)
})
imageFromURL20.addComponentOrReplace(transform91)

const imageFromURL21 = new Entity('imageFromURL21')
engine.addEntity(imageFromURL21)
imageFromURL21.setParent(_scene)
const transform92 = new Transform({
  position: new Vector3(8.000000953674316, 8.5, 15.97330093383789),
  rotation: new Quaternion(2.94207407459772e-14, 0, 1.3745164471131062e-14, 1),
  scale: new Vector3(5.285879135131836, 2, 1.0000054836273193)
})
imageFromURL21.addComponentOrReplace(transform92)

const imageFromURL22 = new Entity('imageFromURL22')
engine.addEntity(imageFromURL22)
imageFromURL22.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(2.714115619659424, 8.500001907348633, 15.97330093383789),
  rotation: new Quaternion(2.94207407459772e-14, 0, 1.3745164471131062e-14, 1),
  scale: new Vector3(5.285881996154785, 2, 1.0000052452087402)
})
imageFromURL22.addComponentOrReplace(transform93)

const imageFromURL23 = new Entity('imageFromURL23')
engine.addEntity(imageFromURL23)
imageFromURL23.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(15.996297836303711, 8.499998092651367, 2.7778196334838867),
  rotation: new Quaternion(2.5328123184399122e-14, 0.7071068286895752, -8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(5.285874366760254, 2, 1.0000066757202148)
})
imageFromURL23.addComponentOrReplace(transform94)

const imageFromURL24 = new Entity('imageFromURL24')
engine.addEntity(imageFromURL24)
imageFromURL24.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(15.996297836303711, 8.5, 8.063704490661621),
  rotation: new Quaternion(2.5328123184399122e-14, 0.7071068286895752, -8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(5.2858757972717285, 2, 1.0000064373016357)
})
imageFromURL24.addComponentOrReplace(transform95)

const imageFromURL25 = new Entity('imageFromURL25')
engine.addEntity(imageFromURL25)
imageFromURL25.setParent(_scene)
const transform96 = new Transform({
  position: new Vector3(15.996297836303711, 8.500001907348633, 13.349589347839355),
  rotation: new Quaternion(2.5328123184399122e-14, 0.7071068286895752, -8.42937097900176e-8, 0.7071068286895752),
  scale: new Vector3(5.285879611968994, 2, 1.0000061988830566)
})
imageFromURL25.addComponentOrReplace(transform96)

const radio3 = new Entity('radio3')
engine.addEntity(radio3)
radio3.setParent(_scene)
const transform97 = new Transform({
  position: new Vector3(15.429515838623047, 7.184481620788574, 12.008336067199707),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(1.0000019073486328, 1, 1.0000019073486328)
})
radio3.addComponentOrReplace(transform97)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
const script7 = new Script7()
const script8 = new Script8()
const script9 = new Script9()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script7.init(options)
script8.init(options)
script9.init(options)
script1.spawn(tableLampLight, {"startOn":true,"clickable":true}, createChannel(channelId, tableLampLight, channelBus))
script2.spawn(roundGalleryLight2, {"startOn":true,"clickable":true}, createChannel(channelId, roundGalleryLight2, channelBus))
script3.spawn(rainLight17, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight17, channelBus))
script3.spawn(rainLight18, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight18, channelBus))
script3.spawn(rainLight20, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight20, channelBus))
script3.spawn(rainLight22, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight22, channelBus))
script3.spawn(rainLight24, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight24, channelBus))
script3.spawn(rainLight25, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight25, channelBus))
script3.spawn(rainLight26, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight26, channelBus))
script3.spawn(rainLight27, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight27, channelBus))
script3.spawn(rainLight28, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight28, channelBus))
script3.spawn(rainLight29, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight29, channelBus))
script3.spawn(rainLight30, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight30, channelBus))
script3.spawn(rainLight31, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight31, channelBus))
script3.spawn(rainLight32, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight32, channelBus))
script3.spawn(rainLight33, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight33, channelBus))
script3.spawn(rainLight34, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight34, channelBus))
script3.spawn(rainLight35, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight35, channelBus))
script3.spawn(rainLight36, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight36, channelBus))
script3.spawn(rainLight37, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight37, channelBus))
script4.spawn(imageFromURL, {"image":"https://i.imgur.com/iqvATL4.jpg"}, createChannel(channelId, imageFromURL, channelBus))
script5.spawn(teleport, {"x":"-140","y":"-117","name":"DOTBONGBILLIONAIRES"}, createChannel(channelId, teleport, channelBus))
script4.spawn(imageFromURL2, {"image":"https://i.imgur.com/VRJZwwS.jpg"}, createChannel(channelId, imageFromURL2, channelBus))
script4.spawn(imageFromURL3, {"image":"https://i.imgur.com/LKwndSb.jpg"}, createChannel(channelId, imageFromURL3, channelBus))
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
script3.spawn(rainLight19, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight19, channelBus))
script3.spawn(rainLight21, {"startOn":true,"clickable":true}, createChannel(channelId, rainLight21, channelBus))
script6.spawn(woodenDoor, {"onClickText":"Open/Close","onClick":[{"entityName":"woodenDoor","actionId":"open","values":{}}],"onOpen":[]}, createChannel(channelId, woodenDoor, channelBus))
script7.spawn(messageBubble, {"text":"Wow, you really know how to work that chair! What else..?","fontSize":20}, createChannel(channelId, messageBubble, channelBus))
script4.spawn(imageFromURL4, {"image":"https://i.imgur.com/7sr6hon.jpg"}, createChannel(channelId, imageFromURL4, channelBus))
script8.spawn(verticalYellowPad, {"distance":8,"speed":8,"autoStart":true,"onReachEnd":[{"entityName":"verticalYellowPad","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalYellowPad","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalYellowPad, channelBus))
script8.spawn(verticalYellowPad3, {"distance":8,"speed":8,"autoStart":true,"onReachEnd":[{"entityName":"verticalYellowPad3","actionId":"goToStart","values":{}}],"onReachStart":[{"entityName":"verticalYellowPad3","actionId":"goToEnd","values":{}}]}, createChannel(channelId, verticalYellowPad3, channelBus))
script4.spawn(imageFromURL5, {"image":"https://i.imgur.com/bPs9PCh.jpg"}, createChannel(channelId, imageFromURL5, channelBus))
script4.spawn(imageFromURL6, {"image":"https://i.imgur.com/2ed5tPB.png"}, createChannel(channelId, imageFromURL6, channelBus))
script4.spawn(imageFromURL7, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL7, channelBus))
script4.spawn(imageFromURL8, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL8, channelBus))
script4.spawn(imageFromURL9, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL9, channelBus))
script4.spawn(imageFromURL10, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL10, channelBus))
script4.spawn(imageFromURL11, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL11, channelBus))
script4.spawn(imageFromURL12, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL12, channelBus))
script4.spawn(imageFromURL13, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL13, channelBus))
script4.spawn(imageFromURL14, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL14, channelBus))
script4.spawn(imageFromURL15, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL15, channelBus))
script4.spawn(imageFromURL16, {"image":"https://i.imgur.com/5VCSsNc.png"}, createChannel(channelId, imageFromURL16, channelBus))
script4.spawn(imageFromURL17, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL17, channelBus))
script4.spawn(imageFromURL18, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL18, channelBus))
script4.spawn(imageFromURL19, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL19, channelBus))
script4.spawn(imageFromURL20, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL20, channelBus))
script4.spawn(imageFromURL21, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL21, channelBus))
script4.spawn(imageFromURL22, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL22, channelBus))
script4.spawn(imageFromURL23, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL23, channelBus))
script4.spawn(imageFromURL24, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL24, channelBus))
script4.spawn(imageFromURL25, {"image":"https://i.imgur.com/T9kuNrx.png"}, createChannel(channelId, imageFromURL25, channelBus))
script9.spawn(radio3, {"startOn":false,"volume":1,"onClickText":"SIGNS","onClick":[{"entityName":"radio3","actionId":"toggle","values":{}}],"station":"https://edge.singsingmusic.net/MC2.mp3"}, createChannel(channelId, radio3, channelBus))