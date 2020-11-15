const express = require('express')
const cors = require('cors')
const upload = require('express-fileupload')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(upload({
	createParentPath: true
}))

const whiteList = ['http://127.0.0.1:8080', 'http://localhost:8080']

const corsOptios = {
	origin: function(origin, callback) {
		if( whiteList.indexOf(origin) !== -1 || !origin ) {
			callback(null, true)
		} else {
			callback(new Error('Blocked by Cors'))
		}
	}
}

app.use(cors(corsOptios))

app.post('/upload', (req, res) => {

	if(!req.files) {
		res.json({
			message: 'File kosong'
		})
		return
	}

	const foto = req.files.foto
	const extValid = /jpg|jpeg|png/gi
	const checkNormalType = extValid.test(foto.name)
	const checkMimeType = extValid.test(foto.mimetype)

	if( !checkNormalType && !checkMimeType ) {
		res.json({
			message: 'Yang anda upload bukan gambar'
		})
		return
	}

	if( foto.size > 3000000 ) {
		res.json({
			message: 'gambar max 3mb'
		})
		return
	}

	let ext = foto.name.split('.')[1]
	let nama = foto.name.split('.')[0]
	nama += '-'
	nama += Date.now()
	nama += '.'
	nama += ext.toLowerCase()

	foto.mv('./foto/' + nama)

	res.json({
		message: `foto ${nama} telah terupload`
	})
	return

})

app.listen(3000, () => console.log(`http://127.0.0.1:3000`))