module.exports = {
  init: [
    { ino: 1, path: 'parent/' },
    { ino: 2, path: 'parent/dir/' },
    { ino: 3, path: 'parent/dir/empty-subdir/' },
    { ino: 4, path: 'parent/dir/subdir/' },
    { ino: 5, path: 'parent/dir/subdir/file' },
    { ino: 6, path: 'parent/other_dir/' }
  ],
  actions: [
    {type: 'rm', path: 'parent/dir'}
  ],
  expected: {
    prepCalls: [
      {method: 'trashFileAsync', path: 'parent/dir/subdir/file'},
      {method: 'trashFolderAsync', path: 'parent/dir/subdir'},
      {method: 'trashFolderAsync', path: 'parent/dir/empty-subdir'},
      {method: 'trashFolderAsync', path: 'parent/dir'}
    ]
  }
}
