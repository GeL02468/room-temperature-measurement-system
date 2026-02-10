# テスト用curlコマンド集
- コマンドプロンプトで行うことを想定
## http://localhost:3000/measurement/threshold/put/threshold
- curl.exe -X PUT -H "Content-Type: application/json" -d "{ \"id\": 1, \"outsideMaxTemperature\": 25, \"outsideMinTemperature\": 30, \"outsideMaxHumidity\": 60, \"outsideMinHumidity\": 75, \"outsideMaxAirPressure\": 1013, \"outsideMinAirPressure\": 1029, \"outsideMeasureDate\": \"2026-02-07 16:06:08.735\" }" http://localhost:3000/measurement/threshold/put/threshold
## http://localhost:3000/measurement/outside/post/outside_measurement_result
- curl.exe -X POST -H "Content-Type: application/json" -d "{ \"id\": 1, \"inside_temperature\": 25, \"inside_humidity\": 55, \"inside_air_pressure\": 1013, \"inside_measure_date\": \"2026-02-07 16:06:08.735\", \"inside_measure_palce\": \"リビング\" }" http://localhost:3000/measurement/outside/post/outside_measurement_result