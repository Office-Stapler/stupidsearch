import requests
import bs4
import json
req = {"track_scores":True,
        "_source":
        {"includes":
            ["*.code","*.name","*.award_titles","*.keywords","urlmap","contenttype"],
            "excludes":["",None,None]},
            "query":
                {"filtered":
                    {"query":
                        {"bool":
                            {"must":
                                [{"multi_match":
                                    {"fields":
                                        ["*.code^10","*.name^7","*.award_titles^7","*.keywords^4","contenttype"],
                                        "query":"math","type":"phrase_prefix","max_expansions":100}},
                                        {"query_string":{"fields":["*study_level_value*"],"query":"*ugrd*"}},
                                        {"bool":{"minimum_should_match":"100%",
                                        "should":
                                            [{"query_string":
                                                {"fields":
                                                    ["*implementation_year*"],
                                                    "query":"*2020*"}}]}}]}},
                    "filter":
                        {"bool":
                            {"should":
                                [{"term":
                                    {"contenttype":"course"}}],
                                "must_not":
                                    [{"missing":
                                        {"field":"*.name"}},
                                        {"term":{"subject.published_in_handbook":"0000000000000000000.000000000000000000"}}]}}}},
            "from":0,"size":100,"sort":[{"_score":"desc"}]}

page = requests.post('https://www.handbook.unsw.edu.au/api/es/search/', json=req)
soup = bs4.BeautifulSoup(page.text, 'html.parser')
data = json.loads(soup.get_text())

for i in data['contentlets'][1:]:
    print(i['name'], i['code'])
