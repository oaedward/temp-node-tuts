const { readFileSync, writeFileSync, readFile, writeFile } = require('fs')
console.log('Start');
readFile('./content/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Result is: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('Done with this task')
      },
    )
  })
})
console.log('Starting with new task');
