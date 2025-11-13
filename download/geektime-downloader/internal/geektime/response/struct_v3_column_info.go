package response

// V3ColumnInfoResponse ...
type V3ColumnInfoResponse struct {
	Code int `json:"code"`
	Data struct {
		ID      int    `json:"id"`
		Type    string `json:"type"`
		IsVideo bool   `json:"is_video"`
		Title   string `json:"title"`
		Extra   struct {
			Sub struct {
				AccessMask int `json:"access_mask"`
			} `json:"sub"`
		} `json:"extra"`
	} `json:"data"`
}
