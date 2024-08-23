wine:
	sudo docker-compose run --rm wine

chmod:
	sudo chmod 777  -R ./dist
	sudo chmod 777  -R ./out
	sudo chmod 777  -R ./build

linux: chmod
	pnpm build:linux

clean:
	sudo rm -rf ./dist ./out  ./build

