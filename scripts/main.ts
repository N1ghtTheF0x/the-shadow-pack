import PackBuilder from "./builder.js"
import Pre16PackBuilder from "./pre1.6/builder.js"

const packs: Array<PackBuilder> = [
    new Pre16PackBuilder
]

packs.forEach(pack => pack.build())