import { yargs, hideBin } from '../plugins'

const parseSync = yargs().parseSync()
const parseSyncHidenBin = yargs(hideBin(process.argv)).parseSync()

export {
  parseSync,
  parseSyncHidenBin,
}