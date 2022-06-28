# CLI
node --loader ts-node/esm ./node_scripts/dataParser.ts

# tsconfig.json
"module":"commonjs",
"moduleResolution":"node"

# package.json
"type":"commonjs"

文件里用的是ES6模块语法运行正常