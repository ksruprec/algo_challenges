def bottle_song(num):
	x = num
	while num > 2:
		print(f"{num} bottles of beer on the wall, {num} bottles of beer. Take one down and pass it around, {num - 1} bottles of beer on the wall.")
		num -=1
	if num == 2: 
		print(f"{num} bottles of beer on the wall, {num} bottles of beer. Take one down and pass it around, {num - 1} bottle of beer on the wall.")
		num -= 1
		print(f"{num} bottle of beer on the wall, {num} bottle of beer. Take one down and pass it around, no more bottles of beer on the wall.")
	print(f"No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more {x} bottles of beer on the wall.")


bottle_song(20)