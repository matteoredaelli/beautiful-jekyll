bundle exec jekyll build
rsync -av /home/matteo/src/paroleonline.it/_site/ freebsd@www.paroleonline.it:/usr/local/www/paroleonline.it/
