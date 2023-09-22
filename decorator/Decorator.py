def func():
	print("func發動")

def wrapper(function):
	print("wrapper發動")
	function()
	print("wrapper結束")





def function_generator():
	def new_func():
		print("new函式發動")
	return new_func

test = function_generator()
test()