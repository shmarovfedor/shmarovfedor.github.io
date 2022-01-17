syntax on
set nu
set ruler
set rulerformat=%l,%v
set backspace=indent,eol,start
set tabstop=2 
set softtabstop=0 
set expandtab 
set shiftwidth=2 
set smarttab
"set colorcolumn=81
"highlight ColorColumn ctermbg=darkgray

" highlighting for search
set hlsearch
hi Search ctermbg=LightYellow
hi Search ctermfg=Black
" nnoremap <CR> :noh<CR><CR>

" opens search results in a window w/ links and highlight the matches
command! -nargs=+ Grep execute 'silent grep! -I -r -n --exclude *.{} . -e <args>' | copen | execute 'silent /<args>'
" shift-control-* Greps for the word under the cursor
nnoremap <leader>g :Grep <C-R>=expand("<cword>")<CR><CR>
set switchbuf+=usetab,newtab
