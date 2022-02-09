import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../a747f104-5434-42a8-a543-8739c24cf253/src/item"
import Script2 from "../8186a12c-d2ef-4f9d-96b9-cc2dd87567d1/src/item"
import Script3 from "../d5ee9a47-8484-4824-a609-996298830b51/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const videoStream = new Entity('videoStream')
engine.addEntity(videoStream)
videoStream.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(5, 0, 8.5),
  rotation: new Quaternion(-5.837277581059123e-15, 1, -1.1920928244535389e-7, 0),
  scale: new Vector3(1, 1, 1)
})
videoStream.addComponentOrReplace(transform2)

const nft = new Entity('nft')
engine.addEntity(nft)
nft.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(28, 0.5, 7),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 2.5)
})
nft.addComponentOrReplace(transform3)
const nftShape = new NFTShape("ethereum://0x60f80121c31a0d46b5279700f9df786054aa5ee5/344847")
nftShape.withCollisions = true
nftShape.isPointerBlocker = true
nftShape.visible = true
nftShape.color = {"r":0.6404918,"g":0.611472,"b":0.8584906}
nft.addComponentOrReplace(nftShape)

const youtubeButtonLink = new Entity('youtubeButtonLink')
engine.addEntity(youtubeButtonLink)
youtubeButtonLink.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(22, 1, 6),
  rotation: new Quaternion(0, 0, 1, -5.960464477539063e-8),
  scale: new Vector3(0.9999995827674866, 0.9999996423721313, 0.9999999403953552)
})
youtubeButtonLink.addComponentOrReplace(transform4)

const instagramButtonLink = new Entity('instagramButtonLink')
engine.addEntity(instagramButtonLink)
instagramButtonLink.setParent(_scene)
const transform5 = new Transform({
  position: new Vector3(12.5, 0.5, 6),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
instagramButtonLink.addComponentOrReplace(transform5)

const glossyAethereaTiles = new Entity('glossyAethereaTiles')
engine.addEntity(glossyAethereaTiles)
glossyAethereaTiles.setParent(_scene)
const gltfShape = new GLTFShape("6b33f46e-9667-45e5-bd90-85f372ee2490/CityTile.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
glossyAethereaTiles.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles.addComponentOrReplace(transform6)

const glossyAethereaTiles2 = new Entity('glossyAethereaTiles2')
engine.addEntity(glossyAethereaTiles2)
glossyAethereaTiles2.setParent(_scene)
glossyAethereaTiles2.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
glossyAethereaTiles2.addComponentOrReplace(transform7)

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
script1.spawn(videoStream, {"startOn":true,"onClickText":"Play video","volume":1,"onClick":[{"entityName":"videoStream","actionId":"toggle","values":{}}],"station":"https://theuniverse.club/live/consensys/index.m3u8","customStation":"https://bafybeie6svicifhlrt5yekgxbma2flyuuygvo2cpmsin4mkphddrou2deu.ipfs.dweb.link/main%205.mp4"}, createChannel(channelId, videoStream, channelBus))
script2.spawn(youtubeButtonLink, {"url":"UCLXcTgzr05cFZaN972nuEXw","bnw":false}, createChannel(channelId, youtubeButtonLink, channelBus))
script3.spawn(instagramButtonLink, {"url":"decentraland_art","bnw":false}, createChannel(channelId, instagramButtonLink, channelBus))