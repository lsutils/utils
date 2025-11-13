include_path ?= $(shell pwd)/includes

all: compile static
	echo "success"

cleanObj:$(wildcard ./includes/*.o ./includes/*.a)
	$(foreach file,$^,@rm $(file))

compile:$(wildcard ./src/*.c)
	$(foreach file,$^,@gcc -c $(file) -I $(include_path) -o $(include_path)/$(notdir $(file:.c=.o)))

static:$(wildcard ./includes/*.o)
	$(foreach file,$^,@ar -crs  $(include_path)/$(notdir $(file:.o=.a)) $(file) )

