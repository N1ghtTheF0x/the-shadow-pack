import PackBuilder from "./builder.js"
import Pre16PackBuilder from "./pre1.6/builder.js"
import Version from "./minecraft/version.js"

await Version.setupManifest2()

const packs: Array<PackBuilder> = [
    new Pre16PackBuilder
]

await Promise.all(packs.map(pack => pack.prepare()))

packs.forEach(pack => pack.build())