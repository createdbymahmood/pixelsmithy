const fse = require('fs-extra')
const path = require('path')

const topDir = path.resolve(__dirname, '..')
fse.emptyDirSync(path.join(topDir, 'public', 'tinymce'))
fse.copySync(
  path.join(topDir, 'node_modules', 'tinymce'),
  path.join(topDir, 'public', 'tinymce'),
  {overwrite: true},
)
