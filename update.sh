bundle exec jekyll build
rsync -av -e 'ssh -p 1022' /home/matteo/src/paroleonline.it/_site/ freebsd@www.paroleonline.it:/usr/local/www/paroleonline.it/
