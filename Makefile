
tidy:
	cd k8s && go mod tidy && cd -
	cd casbin && go mod tidy && cd -
	cd compents && go mod tidy && cd -